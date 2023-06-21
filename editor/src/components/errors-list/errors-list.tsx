import React, { ReactElement } from 'react';
import styles from './errors-list.module.css';
import { GrammarParsingError } from '@gql-grammar/worker';
import { SpinnerIcon } from '$icons/spinner-icon/spinner-icon';
import { CheckIcon } from '$icons/check-icon/check-icon';
import { ExclamationIcon } from '$icons/exclamation-icon/exclamation-icon';
import { ErrorsListItem } from '$components/errors-list/errors-list-item';

interface ErrorsListProps {
  readonly errors: GrammarParsingError[];
  readonly isParsing: boolean;
}

export const ErrorsList = (props: ErrorsListProps): ReactElement => {
  if (props.isParsing) {
    return (
      <span className={styles.parsing} data-testid="ti-parsing-status-working">
        <SpinnerIcon width={16} height={16} />
        <span className={styles.parsingStr} data-testid="ti-parsing-status-working--label">
          Parsing...
        </span>
      </span>
    );
  }

  if (props.errors.length === 0) {
    return (
      <span className={styles.noErrors} data-testid="ti-parsing-status-no-errors">
        <CheckIcon />
        <span className={styles.noErrorsStr} data-testid="ti-parsing-status-no-errors--label">
          No errors!
        </span>
      </span>
    );
  }

  return (
    <div className={styles.errorsWrapper} data-testid="ti-parsing-status-errors--wrapper">
      <span className={styles.foundErrors} data-testid="ti-parsing-status-errors">
        <ExclamationIcon />
        <span
          className={styles.foundErrorsStr}
          data-testid="ti-parsing-status-errors--label"
        >{`Found '${props.errors.length}' parser errors`}</span>
      </span>
      <ul className={styles.errorsList} data-testid="ti-parsing-status-errors--errors-list">
        {props.errors.map((error, index) => (
          <ErrorsListItem key={`code-error-${index + new Date().getUTCDate()}`} errorIndex={index} error={error} />
        ))}
      </ul>
    </div>
  );
};
