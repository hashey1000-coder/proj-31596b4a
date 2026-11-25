export default function LkzAd({
  unit,
  name,
  container = false,
}: {
  unit: number;
  name: string;
  container?: boolean;
}) {
  const ad = (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<!-- Lkz Unit: ${name} --><div class="lkz-ad-${unit}"></div><!-- /Lkz Unit -->`,
      }}
    />
  );
  if (!container) return ad;
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{ad}</div>
  );
}
