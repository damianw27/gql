import { ParsingState } from '@editor/hooks/parsing/types/parsing-state';
import {
  ParsingActions,
  ParsingActionType,
} from '@editor/hooks/parsing/parsing-action';

export const parsingReducer = (
  state: ParsingState,
  action: ParsingActions,
): ParsingState => {
  switch (action.type) {
    case ParsingActionType.Start: {
      return {
        ...state,
        isParsing: true,
      };
    }

    case ParsingActionType.EndWithError: {
      return {
        ...state,
        isParsing: false,
      };
    }

    case ParsingActionType.End: {
      const { output } = action.payload;
      return {
        ...state,
        output,
        isParsing: false,
      };
    }

    default:
      return state;
  }
};
