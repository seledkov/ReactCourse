import React, { useState } from 'react';
import './NewUserForm.css';
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
    <form className='user-form'>
      <div className='user-form__block'>
        <p>UserName</p>
        <input type='text' onChange={getInputEnteredName} />
      </div>
      <div className='user-form__block'>
        <p>Age (Years)</p>
        <input type='number' onChange={getInputEnteredAge} />
      </div>
      <div className='user-form__active'>
        <button type='submit' onClick={saveNewUser}>
          Add User
        </button>
      </div>
    </form>
  );
};

export default NewUserForm;
