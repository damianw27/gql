import { SuggestionsProvider } from '$shared/code-suggestion/suggestions-provider';
import { CaseKind } from '$shared/code-suggestion/types/case-kind';
import { SuggestionsBuilder } from '$shared/code-suggestion/suggestions-builder';
import { Lexer, Parser } from '@gql-grammar/antlr4';
import { LexerFactory } from '$shared/code-suggestion/types/lexer-factory';
import { ParserFactory } from '$shared/code-suggestion/types/parser-factory';

describe('SuggestionsProvider', () => {
  let mockLexerFactory: LexerFactory<Lexer>;
  let mockParserFactory: ParserFactory<Lexer, Parser>;
  let mockSuggestionsBuilder: SuggestionsBuilder<Lexer, Parser>;

  beforeEach(() => {
    mockLexerFactory = jest.fn().mockImplementation(() => {
      return {
        atn: {},
      };
    });

    mockParserFactory = jest.fn();

    mockSuggestionsBuilder = {
      setCasePreference: jest.fn(),
      suggest: jest.fn(),
    } as unknown as SuggestionsBuilder<Lexer, Parser>;

    jest.mock('$shared/code-suggestion/suggestions-builder', () => ({
      SuggestionsBuilder: jest.fn().mockImplementation(() => mockSuggestionsBuilder),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create SuggestionsProvider successfully', () => {
    const provider = new SuggestionsProvider(mockLexerFactory, mockParserFactory);
    expect(provider).toBeDefined();
  });

  it('should throw an error when lexer does not have atn', () => {
    mockLexerFactory = jest.fn().mockImplementation(() => {
      return {};
    });

    expect(() => new SuggestionsProvider(mockLexerFactory, mockParserFactory)).toThrow(
      'Please use ANTLR4 version 4.7.1 or above.',
    );
  });

  it('should call setCasePreference if casePreference is provided', () => {
    const provider = new SuggestionsProvider(mockLexerFactory, mockParserFactory, CaseKind.Lower);
    provider.suggest('input');
    expect(mockSuggestionsBuilder.setCasePreference).toBeCalledWith(CaseKind.Lower);
  });

  it('should not call setCasePreference if casePreference is not provided', () => {
    const provider = new SuggestionsProvider(mockLexerFactory, mockParserFactory);
    provider.suggest('input');
    expect(mockSuggestionsBuilder.setCasePreference).not.toBeCalled();
  });

  it('should call suggest on SuggestionsBuilder', () => {
    const provider = new SuggestionsProvider(mockLexerFactory, mockParserFactory);
    provider.suggest('input');
    expect(mockSuggestionsBuilder.suggest).toBeCalled();
  });
});
