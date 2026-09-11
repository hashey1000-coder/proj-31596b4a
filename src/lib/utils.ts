export function generateId(): string {
  return crypto.randomUUID();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function formatWaitTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hrs} hr`;
  return `${hrs} hr ${mins} min`;
}

export function waitSeverity(
  minutes: number | null
): "short" | "moderate" | "long" | "unknown" {
  if (minutes === null) return "unknown";
  if (minutes < 120) return "short";
  if (minutes < 240) return "moderate";
  return "long";
}

export function severityColor(severity: string): string {
  switch (severity) {
    case "short":
      return "text-green-600 bg-green-50 border-green-200";
    case "moderate":
      return "text-amber-600 bg-amber-50 border-amber-200";
    case "long":
      return "text-red-600 bg-red-50 border-red-200";
    default:
      return "text-gray-500 bg-gray-50 border-gray-200";
  }
}

export function severityDotColor(severity: string): string {
  switch (severity) {
    case "short":
      return "bg-green-500";
    case "moderate":
      return "bg-amber-500";
    case "long":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
}
