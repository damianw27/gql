import { Language } from '@editor/types/language';
import React, { ReactElement, useEffect } from 'react';
import { useHighlights } from '@editor/hooks/highlights/highlights';
import Editor from 'react-simple-code-editor';
import css from './code-editor.module.css';
import { ErrorsList } from '@editor/components/errors-list/errors-list';
import { useParsing } from '@editor/hooks/parsing/parsing';
import { ExamplesList } from '@editor/components/examples-list/examples-list';
import { ButtonGroup } from '@shared/components/button-group/button-group';
import { ShareButton } from '@editor/components/share-button/share-button';
import { useCodeLoader } from '@editor/hooks/code-loader/code-loader';

interface EditorProps {
  readonly language: Language;
  readonly value: string;
  readonly onValueChange: (value: string) => void;
}

export const CodeEditor = (props: EditorProps): ReactElement => {
  const { highlight, grammar } = useHighlights(props.language);
  const { output, isParsing } = useParsing(props.value, props.language);
  const loadedCode = useCodeLoader();

  useEffect(() => {
    if (loadedCode === undefined) {
      return;
    }

    props.onValueChange(loadedCode);
  }, [loadedCode]);

  return (
    <div className={css.codeEditorGrid}>
      <div className={css.editorColumn}>
        <div className={css.editorHeader}>Code Editor</div>
        <ButtonGroup>
          <ShareButton code={props.value} />
        </ButtonGroup>
        <div className={css.editorWrapper}>
          <Editor
            value={props.value}
            onValueChange={props.onValueChange}
            highlight={highlight}
            padding={0}
            textareaClassName={css.codeArea}
            className={css.editor}
          />
        </div>
        <ErrorsList errors={output.errors} isParsing={isParsing} />
      </div>
      <div className={css.examplesColumn}>
        <ExamplesList
          grammar={grammar}
          examples={props.language.examples}
          onExampleClick={(example) => props.onValueChange(example.code)}
        />
      </div>
    </div>
  );
};
