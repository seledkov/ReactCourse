import React from 'react';

const UserCard = (props: any) => {
  console.log(props);
  return (
    <li>
      {props.name}: {props.age}
    </li>
  );
};

export default UserCard;
