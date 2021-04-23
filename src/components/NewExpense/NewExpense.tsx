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
  let visibleHandler: boolean = true;
  const changeVisibleHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    console.log('change');
    return visibleHandler != visibleHandler;
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
