// src/autosuggest-highlight.d.ts
declare module 'autosuggest-highlight/parse' {
  export default function parse(
    text: string,
    matches: Array<{ start: number; end: number }>
  ): Array<{ text: string; highlight: boolean }>;
}

declare module 'autosuggest-highlight/match' {
  export default function match(
    text: string,
    query: string,
    options?: { insideWords?: boolean }
  ): { start: number; end: number }[];
}
