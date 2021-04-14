import React from 'react';
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
  return (
    <Card className='expense-item' key={props.id}>
      <ExpenseDate expenseDate={props.date} />

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}$</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
