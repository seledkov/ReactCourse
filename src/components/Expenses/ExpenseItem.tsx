import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
type IExpenseItemProps = {
  id: string;
  title: string;
  date: Date;
  amount: number;
};
const ExpenseItem = (props: IExpenseItemProps) => {
  // const [testUseState, setTitle] = useState(props.title);
  // const title = useState(props.title);
  console.log('render ExpenseItem');
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    console.log(title);
    setTitle('new Title');
  };
  return (
    <Card className='expense-item' key={props.id}>
      <ExpenseDate expenseDate={props.date} />

      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}$</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};
export default ExpenseItem;
