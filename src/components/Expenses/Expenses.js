import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import React, { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState("2021");
  const filteredExpenseItem = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
  const yearChangeHandler = (year) => {
    setYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={yearChangeHandler} />
      <ExpensesChart expenses={filteredExpenseItem}/>
      <ExpenseList expenses={filteredExpenseItem}/>
    </Card>
  );
}

export default Expenses;
