import React, { ReactElement } from 'react';
import styles from '../errors-list.module.css';
import { ParseError } from '@editor/types/parse-error';

interface ErrorsListItemProps {
  readonly errorIndex: number;
  readonly error: ParseError;
}

export const ErrorsListItem = (props: ErrorsListItemProps): ReactElement => {
  const parserErrorToString = (error: ParseError): string =>
    `[line ${error.lineIndex}:${error.charPosition}] ${error.message}`;

  return (
    <li
      key={`code-error-${props.errorIndex}`}
      className={styles.errorsListElement}
    >
      {parserErrorToString(props.error)}
    </li>
  );
};
