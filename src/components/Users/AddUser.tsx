import React, { useState } from 'react';
import './AddUser.css';
import Button from '../UI/Button';
const NewUserForm = (props: any) => {
  const [EnteredAge, getEnteredAge] = useState(null);
  const [EnteredName, getEnteredName] = useState(null);
  const getInputEnteredAge = (event: any) => {
    const inputAge = event.target.value;
    console.log(inputAge);
    getEnteredAge(inputAge);
  };
  const getInputEnteredName = (event: any) => {
    const inputName = event.target.value;
    console.log(inputName);
    getEnteredName(inputName);
  };
  const newUser = { name: EnteredName, age: EnteredAge };
  console.log(newUser);

  const saveNewUser = (event: any) => {
    event.preventDefault();
    props.onSaveNewUser(newUser);
    console.log(newUser);
  };
  return (
    <form className='user-form' onSubmit={saveNewUser}>
      <label htmlFor='username'>UserName</label>
      <input id='username' type='text' onChange={getInputEnteredName} />
      <label htmlFor='age'>Age (Years)</label>
      <input id='age' type='number' onChange={getInputEnteredAge} />
      <Button type='submit' className='button__form'>
        Add User
      </Button>
      {/* <button type='submit'>Add User</button> */}
    </form>
  );
};

export default NewUserForm;
