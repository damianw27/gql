// import { GqlExample } from '@gql-grammar/core';

import { GrammarDefinition } from '$shared/grammar-builder/types/grammar-definition';

export interface GqlExample {
  readonly name: string;
  readonly code: string;
}

export interface GrammarEventResultInit {
  readonly grammarDefinition: GrammarDefinition;
  readonly examples: GqlExample[];
}
