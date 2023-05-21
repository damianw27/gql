import { Token } from '@gql-grammar/antlr4';

export interface TokenizationResult {
  readonly textNotTokenized: string;
  readonly tokens: Token[];
}
