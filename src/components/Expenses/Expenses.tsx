import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
type IExpensesProps = {
  expenses: IExpenseItem[];
};
export type IExpenseItem = {
  key?: string;
  title: string;
  date: Date;
  amount: number;
  id: string;
};
const Expenses = (props: IExpensesProps) => {
  const [enteredFilter, setEnteredFilter] = useState('2020');
  const saveEnteredFilter = (currentYear: string) => {
    setEnteredFilter(currentYear);
    console.log(enteredFilter);
  };
  // console.log(enteredFilter);
  return (
    <Card className='expenses'>
      <ExpensesFilter
        value={enteredFilter}
        onSaveEnteredFilter={saveEnteredFilter}
      />
      {props.expenses.map((expense: IExpenseItem) => {
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
      {/* <ExpenseItem
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
        /> */}
    </Card>
  );
};

export default Expenses;
