import { ParsingOutput } from '@editor/hooks/parsing/types/parsing-output';

export enum ParsingActionType {
  Start = '[parsing] start parsing action',
  EndWithError = '[parsing] parsing ended with execution error action',
  End = '[parsing] parsing ended action',
}

interface ParsingAction {
  readonly type: string;
}

interface EndParsingPayload {
  readonly output: ParsingOutput;
}

export class StartParsingAction implements ParsingAction {
  public readonly type = ParsingActionType.Start;
}

export class EndWithErrorParsingAction implements ParsingAction {
  public readonly type = ParsingActionType.EndWithError;
}

export class EndParsingAction implements ParsingAction {
  public readonly type = ParsingActionType.End;

  public constructor(public readonly payload: EndParsingPayload) {}
}

export type ParsingActions =
  | StartParsingAction
  | EndWithErrorParsingAction
  | EndParsingAction;
