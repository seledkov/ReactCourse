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
  const LoremList: IUser[] = [];
  // get new user data from child:  NewUserForm
  const [currentList, setCurrentList] = useState(LoremList);
  const addUserHandler = (newUser: IUser) => {
    setCurrentList((prevState: IUser[]) => [...prevState, newUser]);
  };
  const deleteUserHandler = (userId: number) => {
    const newCurrentList = [...currentList];
    newCurrentList.splice(userId, 1);
    setCurrentList(newCurrentList);
  };
  return (
    // modalErr
    <div className='App'>
      <AddUser onAddUser={addUserHandler} />
      {currentList.length > 0 ? (
        <Users list={currentList} onDeleteUser={deleteUserHandler} />
      ) : null}
    </div>
  );
};

export default App;
