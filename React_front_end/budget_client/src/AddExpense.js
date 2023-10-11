import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddExpense = ({ onExpenseAdded }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState(null);
  const history = useHistory();

  const handleForm = (e) => {
    e.preventDefault();

    fetch('http://127.0.0.1:8000/budget_planner/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, cost: parseFloat(cost) }),
    })
      .then((response) => response.json())
      .then((data) => {
        onExpenseAdded(data); // Update the parent component's state with the new expense
        history.push('/');
      })
      .catch((error) => {
        console.error('Error adding expense:', error);
      });
  };

  return (
    <div className="custom-width1 mx-auto">
      <form onSubmit={handleForm}>
        <label>Name</label>
        <input
          className="form-control rounded"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Cost</label>
        <input
          className="form-control rounded"
          type="number"
          required
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <div className="pt-2">
          <button className="btn btn-primary pt-2" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
