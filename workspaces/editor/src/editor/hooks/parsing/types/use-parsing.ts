import { ParsingOutput } from '@editor/hooks/parsing/types/parsing-output';

export interface UseParsing {
  readonly output: ParsingOutput;
  readonly isParsing: boolean;
}
