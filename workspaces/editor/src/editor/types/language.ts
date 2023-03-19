import { LanguageTools } from '@editor/types/language-tools';
import { ExampleDefinition } from '@editor/components/examples-list/components/example-code/types/example-definition';

export interface Language {
  readonly symbolicNames: (string | null)[];
  readonly literals: (string | null)[];
  readonly tools: LanguageTools;
  readonly examples: ExampleDefinition[];
}
