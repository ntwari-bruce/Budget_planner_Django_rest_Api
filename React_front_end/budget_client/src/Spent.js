import React from 'react';
import { useState, useEffect } from 'react'

const Spent = () => {
    const[total, setTotal] = useState(null);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/budget_planner/total_expenses/')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            setTotal(data.total_expenses);
        }).catch((error) => {
            console.error("Unable to fetch the data");
        })
    },[])
    return (
        <div className="rounded color3 custom-width1 mx-auto justify-content-between">
            <div className="p-3">Total Expenses:${total}</div>
        </div>
    );
}

export default Spent;