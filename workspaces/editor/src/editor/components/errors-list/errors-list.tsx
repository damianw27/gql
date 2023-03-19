import React, { ReactElement } from 'react';
import { ExclamationIcon } from '@editor/components/errors-list/components/exclamation-icon';
import { CheckIcon } from '@editor/components/errors-list/components/check-icon';
import styles from './errors-list.module.css';
import { ParseError } from '@editor/types/parse-error';
import { ErrorsListItem } from '@editor/components/errors-list/components/errors-list-item';
import { SpinnerIcon } from '@shared/components/icons/spinner-icon/spinner-icon';

interface ErrorsListProps {
  readonly errors: ParseError[];
  readonly isParsing: boolean;
}

export const ErrorsList = (props: ErrorsListProps): ReactElement => {
  if (props.isParsing) {
    return (
      <span className={styles.parsing}>
        <SpinnerIcon />
        <span className={styles.parsingStr}>Parsing...</span>
      </span>
    );
  }

  if (props.errors.length === 0) {
    return (
      <span className={styles.noErrors}>
        <CheckIcon />
        <span className={styles.noErrorsStr}>No errors!</span>
      </span>
    );
  }

  return (
    <div className={styles.errorsWrapper}>
      <span className={styles.foundErrors}>
        <ExclamationIcon />
        <span className={styles.foundErrorsStr}>
          {`Found '${props.errors.length}' parser errors`}
        </span>
      </span>
      <ul className={styles.errorsList}>
        {props.errors.map((error, index) => (
          <ErrorsListItem
            key={`code-error-${index + new Date().getUTCDate()}`}
            errorIndex={index}
            error={error}
          />
        ))}
      </ul>
    </div>
  );
};
