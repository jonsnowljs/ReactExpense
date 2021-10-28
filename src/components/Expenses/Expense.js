import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart"
import "./Expense.css";
import React, {useState} from "react";

const Expense = (props) => {
  const [year, setYear] = useState("2020");

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year);

  const addFilterHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter year={year} onAddFilter={addFilterHandler} />

      <ExpenseChart expense={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;
