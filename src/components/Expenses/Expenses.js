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
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseAmount={expense.amount}
          expenseDate={expense.date}
          expenseTitle={expense.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
