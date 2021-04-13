import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
type IExpenseItemProps = {
  id: string;
  title: string;
  date: Date;
  amount: number;
};
const ExpenseItem = (props: IExpenseItemProps) => {
  console.log(props);

  return (
    <div className='expense-item' key={props.id}>
      <ExpenseDate expenseDate={props.date} />

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}$</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
