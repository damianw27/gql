import { GrammarParsingError } from '$types/grammar-parsing-error';
import { ParseTree } from '$shared/parse-tree/types/parse-tree';

export interface GrammarEventResultParse {
  readonly text: string;
  readonly suggestions: string[];
  readonly parseTree: ParseTree;
  readonly errors: GrammarParsingError[];
  readonly isInvalid: boolean;
}
