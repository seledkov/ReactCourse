import React, { useState } from 'react';
import NewUserForm from './components/NewUser/NewUserForm';
import './App.css';
import UsersList from './components/UsersList/UsersList';

const App = (props: any) => {
  const LoremList: {}[] = [
    { name: 'user name', age: 20 },
    { name: 'user name', age: 20 },
    { name: 'user name', age: 20 },
  ];
  const [currentList, getCurrentList] = useState(LoremList);
  const getNewUser = (newUser: any) => {
    getCurrentList((prevState) => [...prevState, newUser]);
  };
  return (
    // modaleErr
    <div className='App'>
      <NewUserForm onSaveNewUser={getNewUser} />
      <UsersList list={currentList} />
    </div>
  );
};

export default App;
