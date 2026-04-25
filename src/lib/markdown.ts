export type MarkdownHeading = {
  id: string;
  level: number;
  text: string;
};

export function slugifyHeading(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(markdown: string): MarkdownHeading[] {
  return markdown
    .split("\n")
    .map((line) => /^(#{1,4})\s+(.+)$/.exec(line.trim()))
    .filter((match): match is RegExpExecArray => Boolean(match))
    .map((match) => ({
      id: slugifyHeading(match[2]),
      level: match[1].length,
      text: match[2].trim(),
    }));
}

export function estimateReadingTime(markdown: string) {
  const words = markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[^\p{Letter}\p{Number}\s]/gu, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 200));
}

export function normalizeCallouts(markdown: string) {
  return markdown.replace(
    /:::(tip|warning|danger)\n([\s\S]*?)\n:::/g,
    (_, type: string, body: string) => {
      const label = type.toUpperCase();
      const quoted = body
        .trim()
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n");

      return `> [!${label}]\n${quoted}`;
    },
  );
}
