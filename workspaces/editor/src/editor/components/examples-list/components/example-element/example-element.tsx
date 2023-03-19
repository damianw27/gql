import React, { ReactElement } from 'react';
import { ExampleDefinition } from '@editor/components/examples-list/components/example-code/types/example-definition';
import { ExampleCode } from '@editor/components/examples-list/components/example-code/example-code';
import { Grammar } from 'prismjs';
import css from './example-element.module.css';

interface ExampleElementProps {
  readonly example: ExampleDefinition;
  readonly grammar: Grammar;
  readonly onClick: (example: ExampleDefinition) => void;
}

export const ExampleElement = (props: ExampleElementProps): ReactElement => (
  <li className={css.example} onClick={() => props.onClick(props.example)}>
    <div className={css.exampleHeader}>{props.example.name}</div>
    <ExampleCode example={props.example} grammar={props.grammar} />
  </li>
);
