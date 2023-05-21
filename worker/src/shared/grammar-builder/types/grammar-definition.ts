import { SyntaxObject } from '$shared/grammar-builder/types/syntax-object';

export interface GrammarDefinition {
  readonly name: string;
  readonly keywords: string[];
  readonly syntax: SyntaxObject[];
}
