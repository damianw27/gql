import React, { ReactElement } from 'react';
import { Grammar } from 'prismjs';
import css from '$components/examples-list/examples-list.module.css';
import { Example } from '@gql-grammar/core';
import { ExampleCode } from '$components/examples-list/example-code';

interface ExampleElementProps {
  readonly example: Example;
  readonly grammar: Grammar;
  readonly onClick: (example: Example) => void;
}

export const ExampleElement = (props: ExampleElementProps): ReactElement => (
  <li className={css.example} onClick={() => props.onClick(props.example)} data-testid="ti-examples-list-item">
    <div className={css.exampleHeader} data-testid="ti-examples-list-item--title">
      {props.example.name}
    </div>
    <ExampleCode example={props.example} grammar={props.grammar} />
  </li>
);
