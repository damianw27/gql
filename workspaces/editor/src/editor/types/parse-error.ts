export interface ParseError {
  readonly lineIndex: number;
  readonly charPosition: number;
  readonly message: string;
}
