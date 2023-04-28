import React, { ReactElement, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import css from './code-editor.module.css';
import { useCodeLoader } from '$hooks/code-loader/code-loader';
import { useHighlights } from '$hooks/highlights/highlights';
import { ButtonGroup } from '$components/button-group/button-group';
import { ShareButton } from '$components/share-button/share-button';
import { ErrorsList } from '$components/errors-list/errors-list';
import { ExamplesList } from '$components/examples-list/examples-list';
import { useParsing } from '$hooks/parsing/parsing';

interface EditorProps {
  readonly value: string;
  readonly onValueChange: (value: string) => void;
}

export const CodeEditor = (props: EditorProps): ReactElement => {
  const { isParsing, parseResult, grammarSpec } = useParsing(props.value);
  const { highlight, grammar } = useHighlights(grammarSpec);
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
        <ErrorsList errors={parseResult?.errors ?? []} isParsing={isParsing ?? false} />
      </div>
      <div className={css.examplesColumn}>
        <ExamplesList
          grammar={grammar}
          examples={grammarSpec?.examples ?? []}
          onExampleClick={(example) => props.onValueChange(example.code)}
        />
      </div>
    </div>
  );
};
