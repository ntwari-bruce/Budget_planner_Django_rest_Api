import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import AddExpense from './AddExpense';
import Search from './Search';

const ExpenseList = ({ expenses }) => {
  const [expenseList, setExpenseList] = useState(expenses);
  const [filteredResults, setFilteredResults] = useState('');

  const HandleFilteredResults = (results) => {
    setFilteredResults(results);
  }

  const handleDeleteExpense = (expenseId) => {
    // Send a DELETE request to the server
    fetch(`http://127.0.0.1:8000/budget_planner/delete_expense/${expenseId}/`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If the request is successful, remove the expense from the list
          const updatedList = expenseList.filter((expense) => expense.id !== expenseId);
          setExpenseList(updatedList);
        } else {
          // Handle the error if the request fails
          console.error('Failed to delete expense:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting expense:', error);
      });
  };

  // Function to add a new expense to the list
  const handleAddExpense = (newExpense) => {
    setExpenseList([...expenseList, newExpense]);
  };

  return (
    <div className="mx-auto custom-width1">
      <div className="custom-width2 mx-auto">
        <h2 >Expenses</h2>
      </div>
      <div className="col-sm">
        <Search FilteredResult={HandleFilteredResults}/>
      </div>
      <ul className="list-group text-center pt-1">
      {filteredResults.length > 0 ? (
          filteredResults.map((expense) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={expense.id}>
              <span className="font-weight-bold">{expense.name}</span>
              <div className="d-flex align-items-center">
                <span className="badge rounded-pill bg-primary me-3">${expense.cost}</span>
                <TiDelete size="1.5em" onClick={() => handleDeleteExpense(expense.id)} />
              </div>
            </li>
          ))
        ) : (
          // Display the full list of expenses if no search results
          expenseList.map((expense) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={expense.id}>
              <span className="font-weight-bold">{expense.name}</span>
              <div className="d-flex align-items-center">
                <span className="badge rounded-pill bg-primary me-3">${expense.cost}</span>
                <TiDelete size="1.5em" onClick={() => handleDeleteExpense(expense.id)} />
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="custom-width2 mx-auto pt-3">
        <h2>Add Expense</h2>
      </div>
      <AddExpense onExpenseAdded={handleAddExpense} />
    </div>
  );
};

export default ExpenseList;

