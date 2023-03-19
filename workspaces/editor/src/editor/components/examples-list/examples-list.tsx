import React, { ReactElement, useEffect, useState } from 'react';
import { Grammar } from 'prismjs';
import { ExampleElement } from '@editor/components/examples-list/components/example-element/example-element';
import css from './examples-list.module.css';
import { ExampleDefinition } from '@editor/components/examples-list/components/example-code/types/example-definition';
import Fuse from 'fuse.js';
import { useDebounce } from '@editor/hooks/debounce';

interface ExamplesListProps {
  readonly grammar: Grammar;
  readonly examples: ExampleDefinition[];
  readonly onExampleClick: (example: ExampleDefinition) => void;
}

type ExamplesFuse = Fuse<ExampleDefinition>;

const fuseOptions = {
  includeScore: false,
  shouldSort: true,
  keys: ['title'],
};

export const ExamplesList = (props: ExamplesListProps): ReactElement => {
  const [fuse, setFuse] = useState<ExamplesFuse>(new Fuse([], fuseOptions));
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [examples, setExamples] = useState<ExampleDefinition[]>(props.examples);
  const debouncedSearchPhrase = useDebounce(searchPhrase, 500);

  const searchForExamples = (pattern: string): ExampleDefinition[] =>
    fuse.search(pattern).map((result) => result.item);

  useEffect(() => {
    setFuse(new Fuse(props.examples, fuseOptions));

    if (searchPhrase === '') {
      setExamples(props.examples);
      return;
    }

    const foundExamples = searchForExamples(searchPhrase);
    setExamples(foundExamples);
  }, [props.examples]);

  const handleExampleClick = (example: ExampleDefinition): void => {
    window.scrollTo(0, 0);
    props.onExampleClick(example);
  };

  useEffect(() => {
    if (debouncedSearchPhrase === '') {
      setExamples(props.examples);
      return;
    }

    const foundExamples = searchForExamples(debouncedSearchPhrase);
    setExamples(foundExamples);
  }, [debouncedSearchPhrase]);

  return (
    <div className={css.examplesWrapper}>
      <div className={css.examplesHeader}>Examples</div>
      <input
        type="text"
        className={css.examplesSearch}
        placeholder="Search..."
        onChange={(event) => setSearchPhrase(event.target.value)}
      />
      <ul className={css.examplesList}>
        {examples.map((example, index) => (
          <ExampleElement
            key={`example-${index + 1}`}
            example={example}
            grammar={props.grammar}
            onClick={(example) => handleExampleClick(example)}
          />
        ))}
      </ul>
    </div>
  );
};
