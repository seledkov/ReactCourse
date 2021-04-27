import React, { useState } from 'react';
import './AddUser.css';
import Button from '../UI/Button';
import { IUser } from '../../App';
const NewUserForm = (props: any) => {
  const [EnteredName, setEnteredName] = useState('');
  const [EnteredAge, setEnteredAge] = useState('');
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

  const newUserData: IUser = { name: EnteredName, age: +EnteredAge };

  // const addNewUser = (event: React.FormEvent<HTMLFormElement>) => {
  const addNewUser = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSaveNewUser(newUserData);
    console.log(newUserData);
  };
  return (
    <form className='user-form' onSubmit={addNewUser}>
      <label htmlFor='username'>UserName</label>
      <input id='username' type='text' onChange={usernameChangeHandler} />

      <label htmlFor='age'>Age (Years)</label>
      <input id='age' type='number' onChange={ageChangeHandler} />

      <Button type='submit' className='button__form'>
        Add User
      </Button>
    </form>
  );
};

export default NewUserForm;
