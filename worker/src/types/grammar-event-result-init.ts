import { GqlExample } from '@gql-grammar/core';

export interface GrammarEventResultInit {
  readonly symbolicNames: string[];
  readonly literalNames: string[];
  readonly examples: GqlExample[];
}
