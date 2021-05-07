import React, { ChangeEvent } from 'react';

type InputProps = {
  label: any;
  classes: any;
  isValid: boolean;
  value: string;
  type: string;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
};
const Input = (props: InputProps) => {
  return (
    <div
      className={`${props.classes.control} ${
        props.isValid === false ? props.classes.invalid : ''
      }`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
