import { Transition } from '$types/antlr/transition';
import { ATNState, IntervalSet } from 'antlr4';

export declare class AtomTransition extends Transition {
  public readonly label: IntervalSet;
  public readonly serializationType: number;
  public constructor(target: ATNState, label: number);
  public makeLabel(): IntervalSet;
  public matches(symbol: number, minVocabSymbol: number, maxVocabSymbol: number): boolean;
  public toString(): string;
}
