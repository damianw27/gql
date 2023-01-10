import { ErrorsListProps } from './types/errors-list-props';
import React, { ReactElement } from 'react';
import { ErrorsListItem } from '../errors-list-item/errors-list-item';
import { CheckIcon } from '../icons/check-icon/check-icon';
import { ExclamationIcon } from '../icons/exclamation-icon/exclamation-icon';

import './errors-list.css';

export const ErrorsList = (props: ErrorsListProps): ReactElement => {
  if (props.errors.length === 0) {
    return (
      <span className="no-errors">
        <CheckIcon />
        <span className="no-errors-str">No errors!</span>
      </span>
    );
  }

  return (
    <div className="errors-wrapper">
      <span className="found-errors">
        <ExclamationIcon />
        <span className="found-errors-str">
          {`Found '${props.errors.length}' parser errors`}
        </span>
      </span>
      <ul className="errors-list">
        {props.errors.map((error, index) => (
          <ErrorsListItem
            key={`code-error-${index}`}
            errorIndex={index}
            error={error}
          />
        ))}
      </ul>
    </div>
  );
};
