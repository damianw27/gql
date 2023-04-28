import React, { ReactElement } from 'react';
import { Grammar } from 'prismjs';
import css from './example-element.module.css';
import { ExampleCode } from '$components/examples-list/components/example-code/example-code';
import { GqlExample } from '@gql-grammar/core';

interface ExampleElementProps {
  readonly example: GqlExample;
  readonly grammar: Grammar;
  readonly onClick: (example: GqlExample) => void;
}

export const ExampleElement = (props: ExampleElementProps): ReactElement => (
  <li className={css.example} onClick={() => props.onClick(props.example)}>
    <div className={css.exampleHeader}>{props.example.name}</div>
    <ExampleCode example={props.example} grammar={props.grammar} />
  </li>
);
