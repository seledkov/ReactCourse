import React, { useState } from 'react';
import './AddUser.css';
import Button from '../UI/Button';
import { IUser } from '../../App';
import ErrorModal from '../UI/ErrorModal';
import { JsxElement } from 'typescript';

let errorItem: boolean = false;
const NewUserForm = (props: any) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
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
      errorItem = true;
    }
    if (+enteredAge < 1) {
      errorItem = true;
    }

    props.onAddUser(newUserData);
    console.log(newUserData);
    setEnteredAge('');
    setEnteredName('');
  };
  return (
    <div>
      {errorItem ? (
        <ErrorModal
          title='Incorect name and Age'
          message='error write name and age'
        />
      ) : (
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
      )}
    </div>
  );
};

export default NewUserForm;
