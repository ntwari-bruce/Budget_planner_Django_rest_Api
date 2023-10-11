import React from "react";
import { Link } from 'react-router-dom';
import useFetch from "./useFetch";


const Budget = () => {
  console.log("before");
  const{ data } = useFetch('http://127.0.0.1:8000/budget_planner/total_budget/');
  console.log("in budget:", data);
  const budgetAmount = data ? data.amount : null;
  const the_id = data ? data.id : null;
  console.log("this is the edit id:", the_id);

  return (
    <div className="rounded color1 d-flex custom-width1 mx-auto justify-content-between">
      <div className="p-3">Budget:${budgetAmount}</div>
      <div className="p-3">
      <Link to={`/Edit/${the_id}`} className="rounded btn btn-primary btn-sm">Edit</Link>
      </div>
    </div>
  );
};

export default Budget;
