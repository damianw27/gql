import React, { useState } from 'react';
import { CodeEditor } from './code-editor/code-editor';
import { GqlLexer } from 'gql-parser/dist/public-api';
import GqlParser from 'gql-parser/dist/generated/GqlParser';
import Lexer from 'antlr4/Lexer';
import Parser from 'antlr4/Parser';
import antlr4 from 'antlr4';

export function App() {
  const [query, setQuery] = useState<string>('MATCH (p:Person)-[:LIVES_IN]->(c:City)\nRETURN p.first_name, p.last_name, c.name, c.state\n\n\n\n\n');

  const getLexer = (code: string): Lexer =>
    new GqlLexer(new antlr4.InputStream(code));

  const getParser = (lexer: Lexer): Parser =>
    new GqlParser(new antlr4.CommonTokenStream(lexer));

  return (
    <div className="App">
      <CodeEditor
        value={query}
        onValueChange={(changedQuery) => setQuery(changedQuery)}
        language={{
          symbolicNames: GqlLexer.literalNames,
          literals: GqlLexer.symbolicNames,
          tools: {
            lexer: getLexer,
            parser: getParser,
          },
        }}
      />
    </div>
  );
}
