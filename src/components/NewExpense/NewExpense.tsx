import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props: any) => {
  const saveExpenseData = (enteredDate: object) => {
    const savedData = {
      ...enteredDate,
    };

    props.onAddExpense(savedData);
    console.log(savedData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDate={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
