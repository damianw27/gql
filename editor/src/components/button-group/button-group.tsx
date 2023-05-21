import React, { PropsWithChildren, ReactElement } from 'react';
import css from '$components/button-group/button-group.module.css';

export const ButtonGroup = (props: PropsWithChildren): ReactElement => (
  <div className={css.buttonGroup}>{props.children}</div>
);
