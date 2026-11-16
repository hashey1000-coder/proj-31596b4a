import type { WaitReading } from "@/lib/data/hospitals";
import { formatWaitTime } from "@/lib/utils";

// A static, server-rendered SVG trend of recent wait readings. Kept free of
// Date.now() / client state on purpose: it renders once at build time, so there
// is nothing for the browser to re-render and no hydration mismatch to risk.

function fmtTick(dateStr: string): string {
  return new Date(dateStr).toLocaleString("en-GB", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  });
}

export function WaitTrendChart({
  readings,
  hospitalName,
}: {
  readings: WaitReading[];
  hospitalName: string;
}) {
  // Oldest → newest, numeric readings only.
  const points = readings
    .filter((r) => r.wait_minutes !== null)
    .slice()
    .sort((a, b) => a.scraped_at.localeCompare(b.scraped_at))
    .map((r) => ({ t: r.scraped_at, v: r.wait_minutes as number }));

  // Need at least a couple of points for a line to mean anything.
  if (points.length < 3) return null;

  const W = 800;
  const H = 260;
  const padL = 44;
  const padR = 16;
  const padT = 20;
  const padB = 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  const values = points.map((p) => p.v);
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const span = Math.max(dataMax - dataMin, 30);
  const yMin = Math.max(0, Math.floor((dataMin - span * 0.15) / 10) * 10);
  const yMax = Math.ceil((dataMax + span * 0.15) / 10) * 10;

  const x = (i: number) => padL + (i / (points.length - 1)) * plotW;
  const y = (v: number) => padT + (1 - (v - yMin) / (yMax - yMin)) * plotH;

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(i).toFixed(1)} ${y(p.v).toFixed(1)}`)
    .join(" ");
  const areaPath =
    `M ${x(0).toFixed(1)} ${(padT + plotH).toFixed(1)} ` +
    points.map((p, i) => `L ${x(i).toFixed(1)} ${y(p.v).toFixed(1)}`).join(" ") +
    ` L ${x(points.length - 1).toFixed(1)} ${(padT + plotH).toFixed(1)} Z`;

  const last = points[points.length - 1];
  const lastColor =
    last.v < 120 ? "#16a34a" : last.v <= 240 ? "#d97706" : "#dc2626";

  // Draw the NHS four-hour (240 min) target line only when it sits inside the
  // visible range, so it is a useful reference rather than a line off-screen.
  const showTarget = yMin <= 240 && yMax >= 240;

  // Three evenly spaced x-axis ticks: start, middle, end.
  const tickIdx = [0, Math.floor((points.length - 1) / 2), points.length - 1];

  const windowHours = Math.round(
    (new Date(last.t).getTime() - new Date(points[0].t).getTime()) / 3_600_000
  );
  const windowLabel =
    windowHours >= 44
      ? `${Math.round(windowHours / 24)} days`
      : `${Math.max(windowHours, 1)} hours`;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6">
      <div className="flex items-baseline justify-between mb-1 flex-wrap gap-x-3">
        <h2 className="text-lg font-semibold text-gray-900">
          {hospitalName} wait-time trend
        </h2>
        <span className="text-xs text-gray-500">last {windowLabel}</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Peak {formatWaitTime(dataMax)} · low {formatWaitTime(dataMin)} across{" "}
        {points.length} readings.
      </p>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label={`Line chart of ${hospitalName} wait times over the last ${windowLabel}, ranging from ${formatWaitTime(
          dataMin
        )} to ${formatWaitTime(dataMax)}.`}
      >
        <defs>
          <linearGradient id="waitArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#005EB8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#005EB8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Y gridlines + labels (min, mid, max) */}
        {[yMin, Math.round((yMin + yMax) / 2 / 10) * 10, yMax].map((val, i) => (
          <g key={i}>
            <line
              x1={padL}
              y1={y(val)}
              x2={W - padR}
              y2={y(val)}
              stroke="#f1f5f9"
              strokeWidth="1"
            />
            <text
              x={padL - 8}
              y={y(val) + 4}
              textAnchor="end"
              className="fill-gray-400"
              style={{ fontSize: "12px" }}
            >
              {val}
            </text>
          </g>
        ))}

        {/* NHS 4-hour target reference */}
        {showTarget && (
          <g>
            <line
              x1={padL}
              y1={y(240)}
              x2={W - padR}
              y2={y(240)}
              stroke="#dc2626"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
            <text
              x={W - padR}
              y={y(240) - 5}
              textAnchor="end"
              className="fill-red-600"
              style={{ fontSize: "11px", fontWeight: 600 }}
            >
              4-hour target
            </text>
          </g>
        )}

        <path d={areaPath} fill="url(#waitArea)" />
        <path
          d={linePath}
          fill="none"
          stroke="#005EB8"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Current-value marker */}
        <circle cx={x(points.length - 1)} cy={y(last.v)} r="4.5" fill={lastColor} />
        <circle
          cx={x(points.length - 1)}
          cy={y(last.v)}
          r="9"
          fill={lastColor}
          opacity="0.15"
        />

        {/* X-axis time ticks */}
        {tickIdx.map((idx, i) => (
          <text
            key={idx}
            x={x(idx)}
            y={H - 10}
            textAnchor={i === 0 ? "start" : i === tickIdx.length - 1 ? "end" : "middle"}
            className="fill-gray-400"
            style={{ fontSize: "12px" }}
          >
            {fmtTick(points[idx].t)}
          </text>
        ))}
      </svg>

      <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#005EB8] inline-block rounded" />
          Recorded wait
        </span>
        {showTarget && (
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0 border-t-2 border-dashed border-red-500 inline-block" />
            NHS 4-hour target
          </span>
        )}
      </div>
    </div>
  );
}
