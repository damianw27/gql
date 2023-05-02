import { Transition } from '$types/antlr/transition/transition';
import { ATNState, IntervalSet } from 'antlr4';

export declare class SetTransition extends Transition {
  public readonly serializationType: number;
  public constructor(target: ATNState, set: IntervalSet);
  public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
  public toString(): string;
}
