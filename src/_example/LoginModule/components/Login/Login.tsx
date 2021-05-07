import React, { useEffect, useState, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
type Reducer<S, A> = (state: S, action: A) => any;
type State = { value: string; isValid: boolean };
type Action = {
  type: 'USER_INPUT' | 'INPUT_BLUR';
  value?: string;
  isValid?: boolean | null;
};

const emailReducer: Reducer<State, Action> = (state: State, action: Action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value!,
      isValid: action.value!.includes('@'),
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }
  // console.log(state, action);
  return { value: '', isValid: false };
  // throw new Error('unknow action type');
};

const passReducer: Reducer<State, Action> = (state: State, action: Action) => {
  console.log(state, action);
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value!,
      isValid: action.value!.length > 6,
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: state.value.length > 6,
    };
  }
  return { value: '', isValid: false };
  // throw new Error('unknow action type');
};

const Login = (props: any) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passState, dispatchPass] = useReducer(passReducer, {
    value: '',
    isValid: null,
  });
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      console.log('timeout');
      setFormIsValid(passState.isValid && emailState.isValid);
    }, 500);
    return () => {
      console.log('clean');
      clearTimeout(timeoutID);
    };
    // проверять валидацию  при каждом введеном символе/действии с объектом emailState может быть избыточно по данным зависимостям
  }, [emailState.isValid, passState.isValid]);
  // можем вынести из этих объектов только интересующее нас ключ:значение и установить зависимость по ним
  // const { isValid: emailIsValid } = emailState;

  const emailChangeHandler = (event: any) => {
    dispatchEmail({
      type: 'USER_INPUT',
      value: event.target.value,
    });
    // setFormIsValid(emailState.isValid && passState.isValid);
  };

  const passwordChangeHandler = (event: any) => {
    dispatchPass({ type: 'USER_INPUT', value: event.target.value });
    // setFormIsValid(passState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          classes={classes}
          type='email'
          id={'email'}
          label={'E-Mail'}
          value={emailState.value}
          isValid={emailState.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          classes={classes}
          type='password'
          id={'password'}
          label={'Password'}
          value={passState.value}
          isValid={passState.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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
