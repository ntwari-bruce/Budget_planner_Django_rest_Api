import React, { useEffect, useState } from "react";
import { Link, useHistory} from "react-router-dom";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom"; // Import useParams



const Edit = () => {
  const [budget, setBudget] = useState("");
  const history = useHistory();
  const { id } = useParams();
  const { data: existingBudget } = useFetch(
    "http://127.0.0.1:8000/budget_planner/total_budget/"
  );

  useEffect(() => {
    if (existingBudget) {
      setBudget(existingBudget.amount.toString());
    }
  }, [existingBudget]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("the budget amount submitted!", budget);
    console.log("dore id:", id);

    const url = id
      ? `http://127.0.0.1:8000/budget_planner/update_budget/${id}/`
      : `http://127.0.0.1:8000/budget_planner/total_budget/`;
    const val = id ? "PUT" : "POST";

    fetch(url, {
      method: val,
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ amount: parseFloat(budget) }),
    })
      .then(() => {
        console.log("the amount in the edit:", budget);
        history.push("/");
      })
      .catch((error) => {
        console.log("Error occured:", error);
      });
  };

  return (
    <div className="custom-width1 mx-auto">
      <h4>Edit the amount</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control rounded"
          type="number"
          placeholder="enter the amount here"
          required
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <div className="d-flex justify-content-between pt-2">
          <div>
            <button className="btn btn-primary" type="submit">
              {existingBudget ? "Update amount" : "Add amount"}
            </button>
          </div>
          <div>
            <Link to="/" className="btn btn-danger" type="button">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
