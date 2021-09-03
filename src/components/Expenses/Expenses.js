import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const item1 = props.expenses[0];
  const item2 = props.expenses[1];
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setYear(year);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={yearChangeHandler}/>
      <ExpenseItem
        title={item1.title}
        amount={item1.amount}
        date={item1.date}
      />
      <ExpenseItem
        title={item2.title}
        amount={item2.amount}
        date={item2.date}
      />
    </Card>
  );
}

export default Expenses;
