import React, { MouseEvent, ReactElement } from 'react';
import css from './button.module.css';
import { ButtonIconPlacement } from '@shared/components/button/types/button-icon-placement';
import { SpinnerIcon } from '@shared/icons/spinner-icon/spinner-icon';
import { CopySuccessIcon } from '@shared/icons/copy-success-icon/copy-success-icon';

interface ButtonProps {
  readonly label: string;
  readonly icon?: ReactElement;
  readonly iconPlacement?: ButtonIconPlacement;
  readonly isLoading?: boolean;
  readonly isCopied?: boolean;
  readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps): ReactElement => {
  const drawLabelWithIcon = (
    label: string,
    icon?: ReactElement,
  ): ReactElement => {
    if (icon === undefined) {
      return (
        <div className={css.buttonContentWrapper}>
          <div className={css.buttonLabelWrapper}>{label}</div>
        </div>
      );
    }

    switch (props.iconPlacement) {
      case ButtonIconPlacement.Left: {
        return (
          <div className={css.buttonContentWrapper}>
            <div className={css.buttonIconWrapper}>{icon}</div>
            <div className={css.buttonLabelWrapper}>{label}</div>
          </div>
        );
      }

      case ButtonIconPlacement.Right: {
        return (
          <div className={css.buttonContentWrapper}>
            <div className={css.buttonLabelWrapper}>{label}</div>
            <div className={css.buttonIconWrapper}>{icon}</div>
          </div>
        );
      }

      default: {
        return (
          <div className={css.buttonContentWrapper}>
            <div className={css.buttonLabelWrapper}>{label}</div>
          </div>
        );
      }
    }
  };

  const drawButtonContent = (): ReactElement => {
    if (props.isLoading) {
      return drawLabelWithIcon(
        '',
        <SpinnerIcon width="0.8rem" height="0.8rem" />,
      );
    }

    if (props.isCopied) {
      return drawLabelWithIcon(
        'Copied!',
        <CopySuccessIcon width="0.8rem" height="0.8rem" />,
      );
    }

    return drawLabelWithIcon(props.label, props.icon);
  };

  return (
    <button className={css.button} onClick={props.onClick}>
      {drawButtonContent()}
    </button>
  );
};

Button.defaultProps = {
  iconPlacement: ButtonIconPlacement.Left,
  isLoading: false,
  isCopied: false,
};