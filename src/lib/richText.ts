export interface RichSegment {
  type: "text" | "link";
  value: string;
  href?: string;
  placeholder: boolean;
}

const LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
const PLACEHOLDER = /(\[PLACEHOLDER[^\]]*\])/g;

export function isPlaceholder(value: string): boolean {
  return value.includes("[PLACEHOLDER");
}

/** Turns `[label](https://...)` into link segments. Everything else stays text. */
export function parseRich(input: string): RichSegment[] {
  const chunks: { type: "text" | "link"; value: string; href?: string }[] = [];
  let last = 0;
  for (const match of input.matchAll(LINK)) {
    const index = match.index ?? 0;
    if (index > last) chunks.push({ type: "text", value: input.slice(last, index) });
    chunks.push({ type: "link", value: match[1], href: match[2] });
    last = index + match[0].length;
  }
  if (last < input.length) chunks.push({ type: "text", value: input.slice(last) });

  const segments: RichSegment[] = [];
  for (const chunk of chunks) {
    if (chunk.type === "link") {
      segments.push({
        type: "link",
        value: chunk.value,
        href: chunk.href,
        placeholder: isPlaceholder(chunk.value),
      });
      continue;
    }
    for (const part of chunk.value.split(PLACEHOLDER)) {
      if (!part) continue;
      segments.push({
        type: "text",
        value: part,
        placeholder: part.startsWith("[PLACEHOLDER"),
      });
    }
  }
  return segments;
}
