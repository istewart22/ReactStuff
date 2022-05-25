import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const { expenseDate, expenseTitle, expenseAmount } = props;

  const [title, setTitle] = useState(expenseTitle);

  const clickHandler = () => {
    setTitle('Updated!!');
  };

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={expenseDate} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{expenseAmount}</div>
        </div>
        <button onClick={clickHandler}>Update title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
