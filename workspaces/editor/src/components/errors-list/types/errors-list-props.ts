import { ParserError } from '@pgs/grammar/dist/types/parser-error';

export interface ErrorsListProps {
  readonly errors: ParserError[];
}
