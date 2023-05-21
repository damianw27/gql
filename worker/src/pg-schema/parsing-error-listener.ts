import { GrammarParsingError } from '$types/grammar-parsing-error';
import { ErrorListener, Recognizer, Token } from '@gql-grammar/antlr4';

export class ParsingErrorListener<T extends Token> implements ErrorListener<T> {
  private readonly _errors: GrammarParsingError[] = [];

  // eslint-disable-next-line max-params
  public syntaxError(
    recognizer: Recognizer<T>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
  ): void {
    const parserError: GrammarParsingError = {
      lineIndex: line,
      charPosition: charPositionInLine,
      message: msg,
    };

    this._errors.push(parserError);
  }

  public reportAmbiguity() {}

  public reportAttemptingFullContext() {}

  public reportContextSensitivity() {}

  public get errors() {
    return this._errors;
  }
}
