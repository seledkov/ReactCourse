import React from 'react';
import './Users.css';
import UserCard from './UserCard';
import { IUser } from '../../App';

const UsersList = (props: any) => {
  const deleteUserCard = (id: number) => {
    props.onDeleteUser(id);
    console.log('id', id);
  };
  console.log(props.list);
  return (
    <ul className='users-list'>
      {props.list.map((user: IUser, index: number) => (
        <UserCard
          clicked={() => deleteUserCard(index)}
          name={user.name}
          age={user.age}
          key={Math.random()}
          index={index}
        />
      ))}
    </ul>
  );
};

export default UsersList;
