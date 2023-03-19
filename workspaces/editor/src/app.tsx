import React, { useState } from 'react';
import { CodeEditor } from '@editor/code-editor';
import Lexer from 'antlr4/Lexer';
import Parser from 'antlr4/Parser';
import antlr4 from 'antlr4';
import { gqlExamples, GqlLexer, GqlParser } from 'gql-parser';
import { ExampleDefinition } from '@editor/components/examples-list/components/example-code/types/example-definition';

export function App() {
  const [query, setQuery] = useState<string>(
    'MATCH (p:Person)-[:LIVES_IN]->(c:City)\n',
  );

  const getLexer = (code: string): Lexer =>
    new GqlLexer(new antlr4.InputStream(code));

  const getParser = (lexer: Lexer): Parser =>
    new GqlParser(new antlr4.CommonTokenStream(lexer));

  const getExamples = (): ExampleDefinition[] =>
    gqlExamples.map((example) => ({
      ...example,
      shareUrl: '',
    }));

  return (
    <div className="App">
      <CodeEditor
        value={query}
        onValueChange={setQuery}
        language={{
          symbolicNames: GqlLexer.literalNames,
          literals: GqlLexer.symbolicNames,
          tools: {
            lexer: getLexer,
            parser: getParser,
            run: (parser) => (parser as GqlParser).gqlProgram(),
          },
          examples: getExamples(),
        }}
      />
    </div>
  );
}
