import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        expenseDate={expenses[0].date}
        expenseTitle={expenses[0].title}
        expenseAmount={expenses[0].amount}
      />
      <ExpenseItem
        expenseDate={expenses[1].date}
        expenseTitle={expenses[1].title}
        expenseAmount={expenses[1].amount}
      />
      <ExpenseItem
        expenseDate={expenses[2].date}
        expenseTitle={expenses[2].title}
        expenseAmount={expenses[2].amount}
      />
      <ExpenseItem
        expenseDate={expenses[3].date}
        expenseTitle={expenses[3].title}
        expenseAmount={expenses[3].amount}
      />
    </Card>
  );
};

export default Expenses;
