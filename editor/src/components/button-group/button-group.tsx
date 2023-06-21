import React, { PropsWithChildren, ReactElement } from 'react';
import css from '$components/button-group/button-group.module.css';

export const ButtonGroup = (props: PropsWithChildren): ReactElement => (
  <div className={css.buttonGroup} data-testid="ti-btn-group">
    {props.children}
  </div>
);
