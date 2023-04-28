import React, { ReactElement, useEffect, useState } from 'react';
import { Grammar } from 'prismjs';
import css from './examples-list.module.css';
import Fuse from 'fuse.js';
import { GqlExample } from '@gql-grammar/core';
import { useDebounce } from '$hooks/debounce/debounce';
import { ExampleElement } from '$components/examples-list/components/example-element/example-element';

interface ExamplesListProps {
  readonly grammar: Grammar;
  readonly examples: GqlExample[];
  readonly onExampleClick: (example: GqlExample) => void;
}

type ExamplesFuse = Fuse<GqlExample>;

const fuseOptions = {
  includeScore: false,
  shouldSort: true,
  keys: ['title'],
};

export const ExamplesList = (props: ExamplesListProps): ReactElement => {
  const [fuse, setFuse] = useState<ExamplesFuse>(new Fuse([], fuseOptions));
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [examples, setExamples] = useState<GqlExample[]>(props.examples);
  const debouncedSearchPhrase = useDebounce(searchPhrase, 500);

  const searchForExamples = (pattern: string): GqlExample[] => fuse.search(pattern).map((result) => result.item);

  useEffect(() => {
    setFuse(new Fuse(props.examples, fuseOptions));

    if (searchPhrase === '') {
      setExamples(props.examples);
      return;
    }

    const foundExamples = searchForExamples(searchPhrase);
    setExamples(foundExamples);
  }, [props.examples]);

  const handleExampleClick = (example: GqlExample): void => {
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
