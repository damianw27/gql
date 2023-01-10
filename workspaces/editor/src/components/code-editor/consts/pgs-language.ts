export const pgsLanguage = {
  keyword: {
    pattern:
      /\b(?:CREATE|create|NODE|node|EDGE|edge|GRAPH|graph|OPEN|open|OPTIONAL|optional|TYPE|type|STRICT|strict|ABSTRACT|abstract|LOOSE|loose|IMPORTS|imports)\b/,
    lookbehind: true,
    greedy: true,
  },
  'data-type': {
    pattern:
      /\b(?:STRING|BIT|TINYINT|INT|INT32|BOOL|FLOAT|DOUBLE|DECIMAL|DATE|DATETIME|TIME|YEAR)\b/,
    lookbehind: true,
    greedy: true,
  },
  definition: /[A-Za-z]+ *:/,
  reference: /: *([A-Za-z]+) *([|&] *[A-Za-z]+)*/,
  string: /["'](?:\\.|[^\\"\r\n])*["']/,
  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  punctuation: /[{}[\],()&|]/,
  boolean: /\b(?:FALSE|TRUE)\b/,
  null: /\bNULL\b/,
};
