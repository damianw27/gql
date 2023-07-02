import { Lexer, Parser } from '@gql-grammar/antlr4';
import { SuggestionsBuilder } from '$shared/code-suggestion/suggestions-builder';

export const mockSuggestionsBuilder = jest.fn().mockImplementation(
  () =>
    ({
      setCasePreference: jest.fn(),
      suggest: jest.fn(() => ['suggestion1', 'suggestion2']),
    } as unknown as SuggestionsBuilder<Lexer, Parser>),
);
