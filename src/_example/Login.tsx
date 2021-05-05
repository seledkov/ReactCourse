import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state: any, action: any) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    };
  }
  if (action.type === 'USER_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }
  console.log(state, action);
};

const passReducer = (state: any, action: any) => {
  console.log(state, action);
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.length > 6,
    };
  }
  if (action.type === 'USER_BLUR') {
    return {
      value: state.value,
      isValid: action.value.length > 6,
    };
  }
};

const Login = (props: any) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });

  const [passState, dispatchPass] = useReducer(passReducer, {
    value: '',
    isValid: false,
  });

  const emailChangeHandler = (event: any) => {
    dispatchEmail({ type: 'USER_INPUT', value: event.target.value });

    setFormIsValid(
      event.target.value.includes('@') && passState?.value.trim().length > 6,
    );
  };

  const passwordChangeHandler = (event: any) => {
    dispatchPass({ type: 'USER_INPUT', value: event.target.value });
    console.log(event.target.value);
    setFormIsValid(event.target.value.trim().length > 6 && emailState?.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR', value: 'lorem' });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: 'INPUT_BLUR', value: 'lorem' });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onLogin(emailState!.value, passState!.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState?.isValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState?.value || ''}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState?.isValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passState?.value || ''}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
