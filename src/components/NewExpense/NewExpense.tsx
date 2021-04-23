import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props: any) => {
  const [visibleHandler, setVisibleHandler] = useState(false);
  const saveExpenseData = (enteredDate: object) => {
    const savedData = {
      ...enteredDate,
    };

    props.onAddExpense(savedData);
    console.log(savedData);
  };
  const changeVisibleHandler = () => {
    setVisibleHandler(!visibleHandler);
  };

  return (
    <div className='new-expense'>
      {visibleHandler ? (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseData}
          onChangeVisibleHandler={changeVisibleHandler}
        />
      ) : (
        <button onClick={changeVisibleHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
