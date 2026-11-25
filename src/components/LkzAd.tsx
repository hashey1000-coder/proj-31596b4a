export default function LkzAd({ unit, name }: { unit: number; name: string }) {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<!-- Lkz Unit: ${name} --><div class="lkz-ad-${unit}"></div><!-- /Lkz Unit -->`,
      }}
    />
  );
}
