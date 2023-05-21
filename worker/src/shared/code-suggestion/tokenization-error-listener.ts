import { ErrorListener, Recognizer } from '@gql-grammar/antlr4';

export class TokenizationErrorListener implements ErrorListener<number> {
  public inputStr: string;
  public textNotTokenized: string;

  public constructor(inputStr: string) {
    this.inputStr = inputStr;
    this.textNotTokenized = '';
  }

  // eslint-disable-next-line max-params
  public syntaxError(recognizer: Recognizer<number>, offendingSymbol: number, line: number, column: number): void {
    this.textNotTokenized = this.inputStr.substring(column);
  }

  public reportAmbiguity(): void {}

  public reportAttemptingFullContext(): void {}

  public reportContextSensitivity(): void {}
}
