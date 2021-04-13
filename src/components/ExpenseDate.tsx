import './ExpenseDate.css';

type IExpenseDateProps = {
  expenseDate: Date;
};

const ExpenseDate = (props: IExpenseDateProps) => {
  const month = props.expenseDate.toLocaleString('ru-Ru', { month: 'long' });
  const day = props.expenseDate.toLocaleString('ru-Ru', { day: '2-digit' });
  const year = props.expenseDate.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
