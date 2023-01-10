import { LanguageTools } from './language-tools';

export interface Language {
  readonly symbolicNames: (string | null)[];
  readonly literals: (string | null)[];
  readonly tools: LanguageTools;
}
