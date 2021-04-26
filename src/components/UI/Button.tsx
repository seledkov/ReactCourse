import React from 'react';
import './Button.css';

export type IButton = {
  type: 'button' | 'submit' | 'reset';
  children: string;
  onClick?: () => {};
  className?: string;
};
const Button = (props: IButton) => {
  return (
    <button
      className={`button__ui ${props.className || ''}`}
      type={props.type || 'button'}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
