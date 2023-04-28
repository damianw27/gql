import { ErrorListener, Token, Recognizer, RecognitionException } from 'antlr4';
import { GrammarParsingError } from '$types/grammar-parsing-error';

export class ParsingErrorListener implements ErrorListener<Token> {
  private readonly _errors: GrammarParsingError[] = [];

  // eslint-disable-next-line max-params
  public syntaxError(
    recognizer: Recognizer<Token>,
    offendingSymbol: Token,
    line: number,
    column: number,
    msg: string,
    e: RecognitionException | undefined,
  ): void {
    const parserError: GrammarParsingError = {
      lineIndex: line,
      charPosition: column,
      message: msg,
    };

    this._errors.push(parserError);
  }

  // eslint-disable-next-line max-params
  public reportAmbiguity(
    recognizer: Recognizer<Token>,
    dfa: unknown,
    startIndex: number,
    stopIndex: number,
    exact: unknown,
    ambigAlts: unknown,
    configs: unknown,
  ) {}

  // eslint-disable-next-line max-params
  public reportAttemptingFullContext(
    recognizer: Recognizer<Token>,
    dfa: unknown,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: unknown,
    configs: unknown,
  ) {}

  // eslint-disable-next-line max-params
  public reportContextSensitivity(
    recognizer: Recognizer<Token>,
    dfa: unknown,
    startIndex: number,
    stopIndex: number,
    prediction: unknown,
    configs: unknown,
  ) {}

  public get errors() {
    return this._errors;
  }
}
