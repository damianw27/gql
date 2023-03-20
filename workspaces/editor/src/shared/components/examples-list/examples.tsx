import React, { ReactElement, useEffect, useState } from 'react';
import { ExamplesProps } from './types/examples-props';
import { Example } from './types/example';
import Fuse from 'fuse.js';
import { useDebounce } from '../../hooks/debounce/debounce';
import './examples.css';
import { ExampleItem } from '../example-item/example-item';

const fuseOptions = {
  includeScore: false,
  shouldSort: true,
  keys: ['title'],
};

export const Examples = (props: ExamplesProps): ReactElement => {
  const [fuse, setFuse] = useState<Fuse<Example>>(new Fuse([], fuseOptions));
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [examples, setExamples] = useState<Example[]>([]);

  const debouncedSearchPhrase = useDebounce(searchPhrase, 300);

  const searchForExamples = (pattern: string): Example[] =>
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

  const handleExampleClick = (example: Example): void => {
    window.scrollTo(0, 0);
    props.onExampleClick(example.query);
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
    <div className="examples-wrapper">
      <div className="examples-header">Examples</div>

      <input
        type="text"
        className="examples-search"
        placeholder="Search..."
        onChange={(event) => setSearchPhrase(event.target.value)}
      />

      <ul className="examples-list">
        {examples.map((example, index) => (
          <ExampleItem
            key={`example-${index}`}
            example={example}
            onElementClick={handleExampleClick}
          />
        ))}
      </ul>
    </div>
  );
};
