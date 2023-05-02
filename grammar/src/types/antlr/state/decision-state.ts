import { ATNState } from '$types/antlr/atn-state';

export declare class DecisionState extends ATNState {
  public decision: number;
  public nonGreedy: boolean;
}
