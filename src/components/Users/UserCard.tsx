import React from 'react';

const UserCard = (props: any) => {
  return (
    <li onClick={props.clicked}>
      {props.name}: {props.age}
    </li>
  );
};

export default UserCard;
