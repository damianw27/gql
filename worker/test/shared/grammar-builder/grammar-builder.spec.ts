import { GrammarBuilder } from '$shared/grammar-builder/grammar-builder';
import { SyntaxObject } from '$shared/grammar-builder/types/syntax-object';
import { SyntaxType } from '$shared/grammar-builder/types/syntax-type';
import { SyntaxToken } from '$shared/grammar-builder/types/syntax-token';

describe('GrammarBuilder', () => {
  describe('withName', () => {
    it('should set the name and return the instance', () => {
      const grammarBuilder = new GrammarBuilder();
      const instance = grammarBuilder.withName('testName');
      expect(instance).toBe(grammarBuilder);
      expect(grammarBuilder.build().name).toBe('testName');
    });
  });

  describe('withDataFromAntlr', () => {
    it('should handle strings with letters correctly', () => {
      const result = new GrammarBuilder().withDataFromAntlr(["'word'", "'anotherWord'"]).build();

      expect(result.keywords).toEqual(['word', 'anotherWord']);
    });

    it('should escape and add unicode characters to pattern', () => {
      const grammarBuilder = new GrammarBuilder();
      grammarBuilder.withDataFromAntlr(["'\\\\u0021'"]);
      const result = grammarBuilder.build();

      expect((result.syntax[1].pattern as SyntaxToken).pattern.source).toEqual('[!]');
    });

    it('should add punctuation characters to pattern', () => {
      const grammarBuilder = new GrammarBuilder();
      grammarBuilder.withDataFromAntlr(["'.'", "'->'"]);
      const result = grammarBuilder.build();

      expect((result.syntax[1].pattern as SyntaxToken).pattern.source).toContain('\\.|\\->');
    });

    it('should ignore null and empty strings', () => {
      const grammarBuilder = new GrammarBuilder();
      grammarBuilder.withDataFromAntlr([null, '']);
      const result = grammarBuilder.build();
      expect(result.keywords).toEqual([]);
    });

    it('should set the pattern from antlr data and return instance', () => {
      const grammarBuilder = new GrammarBuilder();
      const instance = grammarBuilder.withDataFromAntlr(["'word'", "'anotherWord'"]);
      expect(instance).toBe(grammarBuilder);
      expect(grammarBuilder.build().keywords).toStrictEqual(['word', 'anotherWord']);
    });
  });

  describe('withSyntaxObject', () => {
    it('should add the syntax object to the syntax array', () => {
      const grammarBuilder = new GrammarBuilder();

      const syntaxObject: SyntaxObject = {
        pattern: { pattern: /test/, lookbehind: true, greedy: true },
        syntaxType: SyntaxType.Keyword,
      };

      grammarBuilder.withSyntaxObject(syntaxObject);
      const result = grammarBuilder.build();
      expect(result.syntax).toContain(syntaxObject);
    });
  });
});
