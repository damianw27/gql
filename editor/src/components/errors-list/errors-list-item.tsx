import React, { ReactElement } from 'react';
import styles from '$components/errors-list/errors-list.module.css';
import { GrammarParsingError } from '@gql-grammar/worker';

interface ErrorsListItemProps {
  readonly errorIndex: number;
  readonly error: GrammarParsingError;
}

export const ErrorsListItem = (props: ErrorsListItemProps): ReactElement => {
  const parserErrorToString = (error: GrammarParsingError): string =>
    `[line ${error.lineIndex}:${error.charPosition}] ${error.message}`;

  return (
    <li
      key={`code-error-${props.errorIndex}`}
      className={styles.errorsListElement}
      data-testid={`ti-parsing-status-errors--errors-list-element-${props.errorIndex}`}
    >
      {parserErrorToString(props.error)}
    </li>
  );
};
