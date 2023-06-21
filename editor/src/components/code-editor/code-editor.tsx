import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import css from './code-editor.module.css';
import { useCodeLoader } from '$hooks/code-loader/code-loader';
import { useHighlights } from '$hooks/highlights/highlights';
import { ShareButton } from '$components/share-button/share-button';
import { ErrorsList } from '$components/errors-list/errors-list';
import { ExamplesList } from '$components/examples-list/examples-list';
import { useParsing } from '$hooks/parsing/parsing';
import { Autocomplete } from '$components/autocomplete/autocomplete.component';
import { CaretData, CaretPosition, defaultCaretData } from '$components/code-editor/types/caret-data';
import { WordData } from '$components/autocomplete/types/word-data.model';
import { CodeEditorViewType } from '$components/code-editor/types/code-editor-view-type';
import { ViewSelect } from '$components/view-select/view-select';
import { availableWorkers, WorkerInfo } from '@gql-grammar/worker';
import { WorkerSelect } from '$components/worker-select/worker-select';
import { ParseTreeView } from '$components/parse-tree/parse-tree-view';

interface EditorProps {
  readonly value: string;
  readonly onValueChange: (value: string) => void;
}

export const CodeEditor = (props: EditorProps): ReactElement => {
  const [currentView, setCurrentView] = useState<CodeEditorViewType>(CodeEditorViewType.Editor);
  const [currentWorker, setCurrentWorker] = useState<WorkerInfo>(availableWorkers[0]);
  const { isParsing, parseResult, specification } = useParsing(props.value, currentWorker);
  const { highlight, grammar } = useHighlights({ specification, parseResult });
  const loadedCode = useCodeLoader();
  const [caretData, setCaretData] = useState<CaretData>(defaultCaretData);
  const [textArea, setTextArea] = useState<HTMLTextAreaElement>();
  const [newCaretIndex, setNewCaretIndex] = useState<number>(-1);

  const getCaretCoordinates = (textAreaElement: HTMLTextAreaElement): CaretPosition => {
    const selectionStart = textAreaElement.selectionStart;
    const linesInTextArea = textAreaElement.value.substring(0, selectionStart).split('\n');
    const x = linesInTextArea.length;
    const y = linesInTextArea[linesInTextArea.length - 1].length;
    return { x, y };
  };

  const getCaretIndex = (textAreaElement: HTMLTextAreaElement): number => textAreaElement.selectionStart;

  const handleCaretChange = (textAreaElement: HTMLTextAreaElement): void => {
    const position = getCaretCoordinates(textAreaElement);
    const index = getCaretIndex(textAreaElement);
    setCaretData({ position, index });
  };

  const handleValueChange = (value: string): void => {
    if (textArea === undefined) {
      return;
    }

    props.onValueChange(value);
    handleCaretChange(textArea);
  };

  const handleSuggestionAccept = (suggestion: string, wordData?: WordData): void => {
    if (wordData === undefined) {
      return;
    }

    let value = props.value;

    if (wordData.startIndex !== -1) {
      let before = value.substring(0, wordData.startIndex);
      let after = value.substring(wordData.startIndex + wordData.length);
      value = `${before}${suggestion} ${after}`;
    }

    setNewCaretIndex(wordData.startIndex + suggestion.length + 1);
    handleValueChange(value);
  };

  const handleSelectCapture = useCallback(() => {
    if (newCaretIndex === -1 || textArea === undefined) {
      return;
    }

    textArea.setSelectionRange(newCaretIndex, newCaretIndex);
    setNewCaretIndex(-1);
  }, [textArea, newCaretIndex]);

  useEffect(() => {
    const textAreaElement = document.getElementById('code-textarea--input') as HTMLTextAreaElement;

    if (textAreaElement === null) {
      return;
    }

    setTextArea(textAreaElement ?? undefined);

    const clickCallback = () => handleCaretChange(textAreaElement);
    const contextMenuCallback = () => handleCaretChange(textAreaElement);
    const keyPressCallback = () => handleCaretChange(textAreaElement);

    textAreaElement.addEventListener('click', clickCallback);
    textAreaElement.addEventListener('contextmenu', contextMenuCallback);
    textAreaElement.addEventListener('keypress', keyPressCallback);

    return () => {
      textAreaElement.removeEventListener('click', clickCallback);
      textAreaElement.removeEventListener('contextmenu', contextMenuCallback);
      textAreaElement.removeEventListener('keypress', keyPressCallback);
    };
  }, [currentView]);

  useEffect(() => {
    if (loadedCode === undefined) {
      return;
    }

    handleValueChange(loadedCode);
  }, [loadedCode]);

  return (
    <div className={css.codeEditorGrid} data-testid="ti-code-editor-grid">
      <div className={css.editorColumn} data-testid="ti-code-editor-column">
        <div className={css.editorHeader} data-testid="ti-code-editor-column-title">
          Code Editor
        </div>
        <div className={css.editorTooltip} data-testid="ti-code-editor-toolbar">
          <ShareButton code={props.value} />
          <div className={css.editorTooltipSeparator} />
          <ViewSelect value={currentView} onViewSelectChange={(viewType) => setCurrentView(viewType)} />
          <div className={css.editorTooltipSeparator} />
          <WorkerSelect value={currentWorker} onChange={setCurrentWorker} />
        </div>
        {currentView === CodeEditorViewType.Editor && (
          <>
            <div className={css.editorWrapper} data-testid="ti-code-editor-wrapper">
              <Editor
                value={props.value}
                onValueChange={handleValueChange}
                highlight={highlight}
                padding={0}
                textareaId="code-textarea--input"
                textareaClassName={css.codeArea}
                className={css.editor}
                onSelectCapture={() => handleSelectCapture()}
                autoFocus
              />
            </div>
            <ErrorsList errors={parseResult?.errors ?? []} isParsing={isParsing ?? false} />
            <Autocomplete
              code={props.value}
              caretData={caretData}
              keywords={specification?.grammarDefinition.keywords ?? []}
              textAreaElement={textArea}
              onSuggestionAccept={handleSuggestionAccept}
            />
          </>
        )}
        {currentView === CodeEditorViewType.ParseTree && <ParseTreeView parseTree={parseResult?.parseTree ?? []} />}
      </div>
      <div className={css.examplesColumn} data-testid="ti-examples-column">
        <ExamplesList
          grammar={grammar || {}}
          examples={specification?.examples ?? []}
          onExampleClick={(example) => props.onValueChange(example.code)}
        />
      </div>
    </div>
  );
};
