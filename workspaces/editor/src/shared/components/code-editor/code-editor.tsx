import React, { ReactElement } from 'react';
import { CodeEditorProps } from './types/code-editor-props';
import { highlight, languages } from 'prismjs';
import Editor from 'react-simple-code-editor';

import './code-editor.css';
import 'prismjs/themes/prism.css';
import { pgsLanguage } from './consts/pgs-language';

const NEW_LINE_SIGN = '\n';

export const CodeEditor = (props: CodeEditorProps): ReactElement => {
  const assemblyLine = (line: string, index: number): string =>
    `<span class="editor-line-number">${index + 1}</span>${line}`;

  const highlightWithLineNumbers = (input: string): string =>
    highlight(input, pgsLanguage, 'pgs')
      .split(NEW_LINE_SIGN)
      .map(assemblyLine)
      .join(NEW_LINE_SIGN);

  return (
    <Editor
      value={props.value}
      onValueChange={(changedQuery) => props.onValueChange(changedQuery)}
      highlight={(code) => highlightWithLineNumbers(code)}
      padding={0}
      textareaId="code-area"
      className="editor"
    />
  );
};
