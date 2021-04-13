import './ExpenseItem.css';
type IExpenseItemProps = {
  id: string;
  title: string;
  date: Date;
  amount: number;
};
const ExpenseItem = (props: IExpenseItemProps) => {
  console.log(props);
  const month = props.date.toLocaleString('ru-Ru', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('ru-Ru', { day: '2-digit' });
  return (
    <div className='expense-item' key={props.id}>
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>

      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}$</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
