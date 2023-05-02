import { Recognizer, ANTLRErrorListener } from 'antlr4ts';

export class CodeCompletionErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  // eslint-disable-next-line max-params
  public syntaxError(
    recognizer: Recognizer<TSymbol, any>,
    offendingSymbol: TSymbol | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
  ) {
    throw new Error('line ' + line + ':' + charPositionInLine + ' ' + msg);
  }
}
