import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const compressHandler = ()=> {
        setShowForm(true)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const cancelChecker = () => {
        setShowForm(false)
    }

    return (
      <div className="new-expense">
        {!showForm && <button type="submit" onClick={compressHandler}>Add New Expense</button>}
        {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelChecker={cancelChecker} />}
      </div>
    );
}

export default NewExpense