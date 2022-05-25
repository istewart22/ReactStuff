import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const { onAddExpense } = props;
  const [newExpenseFormOpen, setNewExpenseFormOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    onAddExpense(expenseData);
  };

  const newExpenseFormHandler = () => {
    setNewExpenseFormOpen(!newExpenseFormOpen);
  };

  return (
    <div className='new-expense'>
      {!newExpenseFormOpen && (
        <button onClick={newExpenseFormHandler}>Add new expense</button>
      )}
      {newExpenseFormOpen && (
        <ExpenseForm
          onChangeExpenseForm={newExpenseFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
