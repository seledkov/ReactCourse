import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
type IExpensesProps = {
  expenses: IExpenseItem[];
};
export type IExpenseItem = {
  id: string;
  title: string;
  date: Date;
  amount: number;
};
const Expenses = (props: IExpensesProps) => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        id={props.expenses[0].id}
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        id={props.expenses[1].id}
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        id={props.expenses[2].id}
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        id={props.expenses[3].id}
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      />
    </Card>
  );
};

export default Expenses;
