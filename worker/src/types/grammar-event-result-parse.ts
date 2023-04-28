import { GrammarParsingError } from '$types/grammar-parsing-error';

export interface GrammarEventResultParse {
  readonly text: string;
  readonly errors: GrammarParsingError[];
  readonly isInvalid: boolean;
}
