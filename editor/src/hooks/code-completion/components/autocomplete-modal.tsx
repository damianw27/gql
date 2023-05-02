import React, { ReactElement, useEffect, useRef, useState } from 'react';
import css from './autocomplete-modal.module.css';

interface AutocompleteModalProps {
  readonly caretPosition?: { x: number; y: number };
  readonly code: string;
}

export const AutocompleteModal = (props: AutocompleteModalProps): ReactElement => {
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const optionsRef = useRef<HTMLUListElement>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  const assemblyOption = (value: string, index: number): ReactElement => {
    const isSelectedClass = selectedOption === index ? css.autocompleteModalSelectedElement : '';

    return (
      <li
        className={`${css.autocompleteModalElement} ${isSelectedClass}`}
        key={`autocomplete-option-${index}`}
        onClick={() => handleOptionClick(index)}
      >
        {value}
      </li>
    );
  };

  const getOptions = (): ReactElement[] => [
    assemblyOption('Option 1', 0),
    assemblyOption('Option 2', 1),
    assemblyOption('Option 3', 2),
    assemblyOption('Option 4', 3),
    assemblyOption('Option 5', 4),
  ];

  useEffect(() => {}, [props.code]);

  return (
    <div
      id={css.autocompleteModal}
      style={{
        top: `calc(${(props.caretPosition?.x ?? 0) * 20}px + 10px)`,
        left: `calc(${(props.caretPosition?.y ?? 0) * 7.2}px + 60px)`,
      }}
    >
      <ul id={css.autocompleteModalList} ref={optionsRef}>
        {getOptions()}
      </ul>
    </div>
  );
};

AutocompleteModal.defaultProps = {
  caretPosition: {
    x: 0,
    y: 0,
  },
};
