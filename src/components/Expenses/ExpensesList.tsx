import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

export type IExpenseItem = {
  title: string;
  date: Date;
  amount: number;
  id: string;
  key?: string;
};
const expensesList = (props: any) => {
  // best practice
  // let expensesContent: JSX.Element[] | JSX.Element = (
  //   let expensesContent: JSX.Element | Element[] = <h1>no expenses found.</h1>;

  if (props.filteredContent.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.filteredContent.map((expense: IExpenseItem) => {
        return (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </ul>
  );
};

export default expensesList;
