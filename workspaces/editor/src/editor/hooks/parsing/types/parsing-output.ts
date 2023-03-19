import { ParseError } from '@editor/types/parse-error';

export interface ParsingOutput {
  readonly isInvalid: boolean;
  readonly query: string;
  readonly errors: ParseError[];
}

export const defaultParsingOutput = {
  isInvalid: false,
  query: '',
  errors: [],
};
