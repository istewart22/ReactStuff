import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  const { expenseDate, expenseTitle, expenseAmount } = props;

  return (
    <Card className='expense-item'>
      <ExpenseDate date={expenseDate} />
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
