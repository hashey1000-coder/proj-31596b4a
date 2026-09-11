"use client";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS = Array.from({ length: 24 }, (_, i) => i);

const DEMAND_DATA: Record<string, number[]> = {
  Mon: [50, 50, 50, 50, 15, 15, 15, 15, 70, 88, 88, 88, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75],
  Tue: [50, 50, 50, 50, 15, 15, 15, 15, 50, 68, 68, 68, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75],
  Wed: [50, 50, 50, 50, 15, 15, 15, 15, 50, 68, 68, 68, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75],
  Thu: [50, 50, 50, 50, 15, 15, 15, 15, 50, 68, 68, 68, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75],
  Fri: [50, 50, 50, 50, 15, 15, 15, 15, 50, 68, 68, 68, 50, 50, 50, 50, 50, 50, 75, 95, 95, 95, 95, 95],
  Sat: [50, 50, 50, 50, 15, 15, 15, 15, 50, 68, 68, 68, 50, 50, 50, 50, 50, 50, 75, 95, 95, 95, 95, 95],
  Sun: [50, 50, 50, 50, 15, 15, 15, 15, 50, 68, 68, 68, 50, 50, 50, 50, 50, 50, 75, 75, 75, 75, 75, 75],
};

function demandColor(value: number): string {
  if (value <= 20) return "bg-green-200";
  if (value <= 40) return "bg-green-300";
  if (value <= 55) return "bg-yellow-200";
  if (value <= 70) return "bg-orange-300";
  if (value <= 85) return "bg-orange-400";
  return "bg-red-400";
}

export function DemandHeatmap() {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto -mx-4 px-4">
        <div className="min-w-[640px]">
          <div className="grid gap-[2px]" style={{ gridTemplateColumns: "48px repeat(24, 1fr)" }}>
            {[
              <div key="corner" />,
              ...HOURS.map((h) => (
                <div key={`h-${h}`} className="text-[10px] text-gray-400 text-center pb-1">
                  {h}
                </div>
              )),
              ...DAYS.flatMap((day) => [
                <div key={`label-${day}`} className="text-xs font-medium text-gray-600 flex items-center">
                  {day}
                </div>,
                ...HOURS.map((hour) => {
                  const value = DEMAND_DATA[day][hour];
                  return (
                    <div
                      key={`${day}-${hour}`}
                      className={`aspect-square rounded-[3px] ${demandColor(value)} transition-transform hover:scale-125 cursor-default`}
                      title={`${day} ${hour}:00 — demand ${value}%`}
                    />
                  );
                }),
              ]),
            ]}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between mt-3 text-[10px] text-gray-500">
            <span>Quietest</span>
            <div className="flex gap-1">
              <span className="w-4 h-3 rounded-[2px] bg-green-200" />
              <span className="w-4 h-3 rounded-[2px] bg-green-300" />
              <span className="w-4 h-3 rounded-[2px] bg-yellow-200" />
              <span className="w-4 h-3 rounded-[2px] bg-orange-300" />
              <span className="w-4 h-3 rounded-[2px] bg-orange-400" />
              <span className="w-4 h-3 rounded-[2px] bg-red-400" />
            </div>
            <span>Busiest</span>
          </div>
          <p className="text-[10px] text-gray-400 text-center mt-1">
            Hour of day (0–23)
          </p>
        </div>
      </div>
    </div>
  );
}
