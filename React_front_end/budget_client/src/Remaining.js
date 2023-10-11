import React from 'react';
import { useState, useEffect } from 'react'
import useFetch from './useFetch';

const Remaining = () => {
   const[total_expenses, setTotalExpense] = useState(null);

   const{ data } = useFetch('http://127.0.0.1:8000/budget_planner/total_budget/');
   const budgetAmount = data ? data.amount : null;
   useEffect(()=> {
      fetch('http://127.0.0.1:8000/budget_planner/total_expenses/')
      .then((response)=> {
         return response.json();
      }).then((data)=> {
         setTotalExpense(data.total_expenses);
      }).catch((error)=>{
         console.error("Unable to fetch the data");
      })
   }, []);
    return ( 
        <div className="rounded color2 custom-width1 mx-auto ">
           <div className="p-3">Remaining:${budgetAmount - total_expenses}</div>
        </div>
     );
}
 
export default Remaining;