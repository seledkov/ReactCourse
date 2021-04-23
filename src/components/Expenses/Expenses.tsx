import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
type IExpensesProps = {
  expenses: IExpenseItem[];
};
export type IExpenseItem = {
  title: string;
  date: Date;
  amount: number;
  id: string;
  key?: string;
};

const Expenses = (props: IExpensesProps) => {
  const [enteredFilter, setEnteredFilter] = useState('2020');
  // currentYear: string потому  что мы ожидаем значение от select
  // а оно по умолчанию возращается в строковом типе данных or undefind?
  const saveEnteredFilter = (currentYear: string) => {
    setEnteredFilter(currentYear);
    console.log(typeof enteredFilter);
  };
  const filteredExtenses: IExpenseItem[] = props.expenses.filter(
    (extenseItem: IExpenseItem) =>
      extenseItem.date.getUTCFullYear() === +enteredFilter,
  );
  console.log(filteredExtenses);
  // console.log(enteredFilter);

  return (
    <Card className='expenses'>
      <ExpensesFilter
        value={enteredFilter}
        onSaveEnteredFilter={saveEnteredFilter}
      />
      <ExpensesList filteredContent={filteredExtenses} />
    </Card>
  );
};

export default Expenses;
