import React, { ReactElement } from 'react';
import parse from 'html-react-parser';
import { highlight } from 'prismjs';
import { pgsLanguage } from '../code-editor/consts/pgs-language';
import { ExampleCodeProps } from './types/example-code-props';
import './example-code.css';

const NEW_LINE = '\n';

export const ExampleCode = (props: ExampleCodeProps): ReactElement => {
  const getCodeLine = (line: string, index: number): ReactElement => (
    <>
      <span className="example-code-line">
        <span className="line-number">{index + 1}</span>
        {parse(line)}
      </span>
      <br />
    </>
  );

  const getCodeLines = (input: string): ReactElement[] =>
    highlight(input, pgsLanguage, 'pgs').split(NEW_LINE).map(getCodeLine);

  return (
    <pre className="example-code">
      {getCodeLines(props.example.query.trim())}
    </pre>
  );
};
