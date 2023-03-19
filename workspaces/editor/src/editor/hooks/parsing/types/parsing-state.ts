import {
  defaultParsingOutput,
  ParsingOutput,
} from '@editor/hooks/parsing/types/parsing-output';

export interface ParsingState {
  readonly output: ParsingOutput;
  readonly isParsing: boolean;
}

export const defaultParsingState: ParsingState = {
  output: defaultParsingOutput,
  isParsing: false,
};
