import React, { useState } from 'react';
import Expenses, { IExpenseItem } from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES: IExpenseItem[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = (props: any) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expenseItem: IExpenseItem) => {
    // prevExpenses = является последним обновленным состоянием expenses
    // и по умолчанию передается при вызове callback в сеттере setExpenses
    setExpenses((prevExpenses) => {
      return [expenseItem, ...prevExpenses];
    });
  };
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
