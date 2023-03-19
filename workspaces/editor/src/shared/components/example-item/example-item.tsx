import React, { ReactElement } from 'react';
import './example-item.css';
import { ExampleItemProps } from './types/example-item-props';
import { ExampleCode } from '../example-code/example-code';

export const ExampleItem = (props: ExampleItemProps): ReactElement => (
  <li className="example" onClick={() => props.onElementClick(props.example)}>
    <div className="example-header">{props.example.title}</div>
    <ExampleCode example={props.example} />
  </li>
);
