import React from 'react';
import './UsersList.css';
import UserCard from './UserCard';

const UsersList = (props: any) => {
  console.log(props.list);
  return (
    <ul className='users-list'>
      {props.list.map((user: any) => (
        <UserCard name={user.name} age={user.age} key={Math.random()} />
      ))}
    </ul>
  );
};

export default UsersList;
