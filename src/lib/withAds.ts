const AD = (name: string, unit: number) =>
  `<!-- Lkz Unit: ${name} --><div class="lkz-ad-${unit}"></div><!-- /Lkz Unit -->`;

const BEFORE_H2: Record<number, string> = {
  2: AD("in_content_1", 1549),
  3: AD("in_content_2", 1550),
  4: AD("in_content_3", 1551),
};

export function withAds(bodyHtml: string): string {
  let n = 0;
  return bodyHtml.replace(/<h2[\s>]/gi, (tag) => {
    n += 1;
    return (BEFORE_H2[n] ?? "") + tag;
  });
}
