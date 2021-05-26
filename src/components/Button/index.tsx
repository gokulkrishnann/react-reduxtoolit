import React, {
  FunctionComponent,
  MouseEvent,
  ReactElement,
  ReactNode
} from 'react';

import { ButtonComponent } from './styles';

export type ButtonProps = {
  id?: string;
  ariaLabel?: string;
  disabled?: boolean;
  /**
   * Ref to be applied
   */
  forwardedRef?: any;
  /**
   * Takes a callback click event
   */
  onClick?: (
    event: MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  label: string | ReactElement | ReactNode;
  /**
   * Theme
   */
  outlined?: boolean;
  /**
   * Theme
   */
  secondaryOutlined?: boolean;
  /**
   * Theme
   */
  secondary?: boolean;
  /**
   * Button Type
   */
  type?: 'button' | 'submit';
  className?: string;

  /**
   * Rounded style or normal?
   */
  rounded?: boolean;
};

/**
 * A simple button
 */
const Button: FunctionComponent<ButtonProps> = ({
  id,
  ariaLabel,
  disabled = false,
  forwardedRef = null,
  onClick,
  label,
  outlined = false,
  secondaryOutlined = false,
  secondary = false,
  rounded = false,
  type = 'button',
  className
}) => {
  const isPrimary =
    !outlined && !secondaryOutlined && !secondary ? true : false;
  /* eslint-disable */
  return (
    <ButtonComponent
      id={id}
      aria-label={ariaLabel}
      className={className}
      primary={isPrimary}
      secondary={secondary}
      outlined={outlined}
      secondaryOutlined={secondaryOutlined}
      rounded={rounded}
      type={type}
      ref={forwardedRef}
      onClick={(e: any) => {
        onClick ? onClick(e) : null;
        e.stopPropagation();
      }}
      disabled={disabled}
    >
      {label}
    </ButtonComponent>
  );
};

export default Button;
