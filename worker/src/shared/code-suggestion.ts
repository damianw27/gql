import { GqlLexer, GqlParser } from '@gql-grammar/core/dist/versions/latest';
import { CharStreams, CommonToken, CommonTokenStream, Token } from 'antlr4ts';
import { AtomTransition, SetTransition } from 'antlr4ts/atn';
import { IntervalSet } from 'antlr4ts/misc';
import { CodeCompletionErrorListener } from '$shared/code-completion-error-listener';
import { AutoCompleteStackElement } from '$shared/auto-complete-stack-element';

export class CodeSuggestions {
  private readonly caretToken = new CommonToken(0);

  public autocomplete = (input: string): number[] => {
    const charStream = CharStreams.fromString(input);
    const lexer = new GqlLexer(charStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new CodeCompletionErrorListener());
    const allTokens = lexer.getAllTokens();
    const validTokens = allTokens.filter((token) => token.channel === 0);
    validTokens.push(this.caretToken);
    const commonTokensStream = new CommonTokenStream(lexer);
    const parser = new GqlParser(commonTokensStream);
    const startingRule = 0;
    const initialState = parser.getATNWithBypassAlts().ruleToStartState[startingRule];
    const stack: AutoCompleteStackElement[] = [{ tokenStreamIndex: 0, state: initialState, alreadyPassed: [] }];
    return this.process(validTokens, stack);
  };

  private process(tokens: Token[], stack: AutoCompleteStackElement[]): number[] {
    const suggestions: number[] = [];

    while (stack.length !== 0) {
      const currentStackElement = stack.pop();

      if (currentStackElement === undefined) {
        break;
      }

      const { tokenStreamIndex, state, alreadyPassed } = currentStackElement;
      const transitions = state.getTransitions();

      for (let transitionIndex = transitions.length - 1; transitionIndex >= 0; transitionIndex--) {
        const currentTransition = transitions[transitionIndex];

        if (currentTransition.isEpsilon && !alreadyPassed.includes(currentTransition.target.stateNumber)) {
          stack.push({
            tokenStreamIndex,
            state: currentTransition.target,
            alreadyPassed: [currentTransition.target.stateNumber, ...alreadyPassed],
          });
        } else if (currentTransition instanceof AtomTransition || currentTransition instanceof SetTransition) {
          const nextToken = tokens[tokenStreamIndex];

          if (nextToken === this.caretToken) {
            const intervalArray = this.getArrayFromIntervalSet(currentTransition.label);
            suggestions.push(...intervalArray);
          } else if (currentTransition.label.contains(nextToken.type)) {
            const nextTokenStreamIndex = tokenStreamIndex + 1;

            stack.push({
              tokenStreamIndex: nextTokenStreamIndex,
              state: currentTransition.target,
              alreadyPassed: [],
            });
          }
        }
      }
    }

    return suggestions;
  }

  private getArrayFromIntervalSet(intervalSet: IntervalSet) {
    const values = [];
    const intervalsCount = intervalSet.intervals.length;

    for (let i = 0; i < intervalsCount; i++) {
      const interval = intervalSet.intervals[i];
      const a = interval.a;
      const b = interval.a;

      // Careful. Intervals are open in the right, thats why < and not <=
      for (let v = a; v < b; v++) {
        values.push(v);
      }
    }

    return values;
  }
}
