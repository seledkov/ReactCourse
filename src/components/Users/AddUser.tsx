import React, { useState } from 'react';
import './AddUser.css';
import Button from '../UI/Button';
import { IUser } from '../../App';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../UI/Wrapper';

const lorem: any = {};
const NewUserForm = (props: any) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(lorem);

  const usernameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputName = event.target.value;
    setEnteredName(inputName);
  };
  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputAge = event.target.value;
    setEnteredAge(inputAge);
  };

  // const addNewUser = (event: React.FormEvent<HTMLFormElement>) => {
  const addNewUser = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUserData: IUser = { name: enteredName, age: +enteredAge };

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'error1',
        message: 'please enter a valid name and age (non-empty)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'error2',
        message: 'please enter a valid age ( > 0)',
      });
      return;
    }

    props.onAddUser(newUserData);
    console.log(newUserData);
    setEnteredAge('');
    setEnteredName('');
  };
  const errorHandler = () => {
    setError({});
  };
  return (
    <Wrapper>
      {error.title && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form className='user-form' onSubmit={addNewUser}>
        <label htmlFor='username'>UserName</label>
        <input
          id='username'
          type='text'
          value={enteredName}
          onChange={usernameChangeHandler}
        />

        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          value={enteredAge}
          onChange={ageChangeHandler}
        />

        <Button type='submit' className='button__form'>
          Add User
        </Button>
      </form>
    </Wrapper>
  );
};

export default NewUserForm;
