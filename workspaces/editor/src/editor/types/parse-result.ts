import { ParseError } from '@editor/types/parse-error';

export interface ParseResult {
  readonly query: string;
  readonly isValid: boolean;
  readonly errors?: ParseError[];
}
