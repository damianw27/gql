import { ATNState } from 'antlr4ts/atn';

export interface AutoCompleteStackElement {
  readonly tokenStreamIndex: number;
  readonly state: ATNState;
  readonly alreadyPassed: number[];
}
