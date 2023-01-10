import { ParserError } from '@pgs/grammar/dist/types/parser-error';

export interface ErrorsListItemProps {
  readonly errorIndex: number;
  readonly error: ParserError;
}
