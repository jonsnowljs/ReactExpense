import React, { useState } from "react";
import "./ExpenseFrom.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return { ...prevValue, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return { ...prevValue, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevValue) => {
      return { ...prevValue, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = userInput;
    expenseData.date = new Date(expenseData.date);
    props.onSaveExpenseData(expenseData);

    setUserInput({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            mi="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="ew-expense__actions">
        <button onClick={props.cancelChecker}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
