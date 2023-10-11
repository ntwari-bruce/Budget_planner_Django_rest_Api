import React from 'react';
import Budget from './Budget';
import Remaining from './Remaining';
import Spent from './Spent';
import ExpenseList from './ExpenseList';
import { useState, useEffect } from 'react';

const Home = () => {
  const[expenses, setExpenses] = useState();
  const url1 = 'http://127.0.0.1:8000/budget_planner/';

  useEffect(() => {
    fetch(url1)
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to fetch the data");
        }
        return res.json();
      })
      .then((responseData) => {
       setExpenses(responseData);
       console.log("xxxxxxxxxx responseData:", responseData);
     
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

    return ( 
        <div className="container">
            <div className="row flex-column mt-2">
                  <div className="col-sm">
                    <Budget />
                  </div>
                  <div className="col-sm p-3">
                    <Remaining />
                  </div>
                  <div className="col-sm">
                    <Spent />
                  </div>
            </div>
            <div className="row flex-column mt-3">
                <div className="col-sm pt-4">
                     {expenses && <ExpenseList expenses={expenses}/>}
                </div>

            </div>
        </div>
     );
}
 
export default Home;