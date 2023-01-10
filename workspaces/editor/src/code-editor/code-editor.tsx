import { Language } from './types/language';
import { ReactElement, useEffect } from 'react';
import React from 'react';
import { useHighlights } from './hooks/highlights';
import Editor from 'react-simple-code-editor';
import GqlParser from 'gql-parser/dist/generated/GqlParser';
import styles from './styles/code-editor.module.css';

interface EditorProps {
  readonly language: Language;
  readonly value: string;
  readonly onValueChange: (value: string) => void;
}

export const CodeEditor = (props: EditorProps): ReactElement => {
  const highlight = useHighlights(props.language);

  useEffect(() => {
    const lexer = props.language.tools.lexer(props.value);
    const parser = props.language.tools.parser(lexer) as GqlParser;
    parser.gqlParser();
  }, [props.value, props.language.tools]);

  return (
    <div className={styles['editor-wrapper']}>
      <Editor
        value={props.value}
        onValueChange={(changedQuery) => props.onValueChange(changedQuery)}
        highlight={highlight}
        padding={0}
        textareaClassName={styles['code-area']}
        className={styles['editor']}
      />
    </div>
  );
};
