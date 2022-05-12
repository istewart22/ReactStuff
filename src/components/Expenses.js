import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  const { expenses } = props;
  return (
    <div className='expenses'>
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
    </div>
  );
}

export default Expenses;