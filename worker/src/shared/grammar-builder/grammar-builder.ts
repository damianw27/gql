import { SyntaxObject } from '$shared/grammar-builder/types/syntax-object';
import { SyntaxType } from '$shared/grammar-builder/types/syntax-type';
import { GrammarDefinition } from '$shared/grammar-builder/types/grammar-definition';

const UNICODE_ESCAPED_CHAR_REGEX = /^('\\\\u)/;
const CONTAINS_LETTERS_REGEX = /[a-zA-Z]/;
const REGEX_SPEC_CHARS_REGEX = /[.*+\-?^${}()|[\]\\]/g;
const ESCAPED_CHAR_PATTERN = '\\$&';
const REGEX_ALT_SEPARATOR = '|';

export class GrammarBuilder {
  private readonly syntax: SyntaxObject[];
  private readonly keywords: string[];

  private name: string;

  public constructor() {
    this.name = '';
    this.syntax = [];
    this.keywords = [];
  }

  public withName = (name: string): GrammarBuilder => {
    this.name = name;
    return this;
  };

  public withDataFromAntlr = (literalNames: (string | null)[]): GrammarBuilder => {
    const possibleSpecialWords = this.getOnlyStringsFromArray(literalNames);

    const keywords = [...possibleSpecialWords]
      .filter((literal) => CONTAINS_LETTERS_REGEX.test(literal ?? ''))
      .filter((literal) => !UNICODE_ESCAPED_CHAR_REGEX.test(literal))
      .map((char: string) => char.replace(REGEX_SPEC_CHARS_REGEX, ESCAPED_CHAR_PATTERN));

    this.keywords.push(...keywords);

    const punctuation = [...possibleSpecialWords]
      .filter((literal) => !CONTAINS_LETTERS_REGEX.test(literal ?? ''))
      .map((literal) => (UNICODE_ESCAPED_CHAR_REGEX.test(literal) ? this.escapeLiteral(literal) : literal))
      .map((char: string) => char.replace(REGEX_SPEC_CHARS_REGEX, ESCAPED_CHAR_PATTERN));

    const keywordsRegexString = keywords.join(REGEX_ALT_SEPARATOR);
    const punctuationRegexString = punctuation.join(REGEX_ALT_SEPARATOR);
    const keywordsRegex = new RegExp(`\\b(?:${keywordsRegexString})\\b`, 'gi');
    const punctuationRegex = new RegExp(`[${punctuationRegexString}]`, 'g');

    this.syntax.push(
      {
        pattern: {
          pattern: keywordsRegex,
          lookbehind: true,
          greedy: true,
        },
        syntaxType: SyntaxType.Keyword,
      },
      {
        pattern: {
          pattern: punctuationRegex,
          greedy: true,
        },
        syntaxType: SyntaxType.Punctuation,
      },
    );

    return this;
  };

  public withSyntaxObject = (syntaxObject: SyntaxObject): GrammarBuilder => {
    this.syntax.push(syntaxObject);
    return this;
  };

  public build = (): GrammarDefinition => ({
    name: this.name,
    keywords: this.keywords,
    syntax: this.syntax,
  });

  private getOnlyStringsFromArray = (array: (string | null)[]): string[] =>
    array
      .filter((potentialString) => potentialString !== null && potentialString !== '')
      .map((potentialString) => potentialString!)
      .map((potentialString) => potentialString.replace(/'/g, ''));

  private escapeLiteral = (literal: string): string => {
    const charIndexStr = literal.replace(/'|\\\\u/g, '');
    const charIndex = parseInt(charIndexStr, 16);
    return String.fromCharCode(charIndex).trim();
  };
}
