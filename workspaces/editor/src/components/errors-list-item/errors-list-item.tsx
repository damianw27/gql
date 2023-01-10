import { ErrorsListItemProps } from './types/errors-list-item-props';
import React, { ReactElement } from 'react';

import './errors-list-item.css';
import { ParserError } from '@pgs/grammar/dist/types/parser-error';

export const ErrorsListItem = (props: ErrorsListItemProps): ReactElement => {
  const parserErrorToString = (error: ParserError): string =>
    `[line ${error.lineIndex}:${error.charPosition}] ${error.message}`;

  return (
    <li key={`code-error-${props.errorIndex}`} className="errors-list-element">
      {parserErrorToString(props.error)}
    </li>
  );
};
