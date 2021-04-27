import React, { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import Users from './components/Users/Users';

export type IUser = {
  name: string;
  age: number;
  key?: string;
};
const App = (props: any) => {
  // test list
  const LoremList: IUser[] = [
    { name: 'user name1', age: 21 },
    { name: 'user name2', age: 22 },
    { name: 'user name3', age: 23 },
  ];
  // get new user data from child:  NewUserForm
  const [currentList, getCurrentList] = useState(LoremList);
  const getNewUser = (newUser: IUser) => {
    getCurrentList((prevState: IUser[]) => [...prevState, newUser]);
  };
  const deleteUser = (userId: number) => {
    const newCurrentList = [...currentList];
    newCurrentList.splice(userId, 1);
    getCurrentList(newCurrentList);
  };
  return (
    // modalErr
    <div className='App'>
      <AddUser onSaveNewUser={getNewUser} />
      <Users list={currentList} onDeleteUser={deleteUser} />
    </div>
  );
};

export default App;
