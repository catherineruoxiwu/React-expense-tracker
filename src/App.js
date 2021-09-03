import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: '26.79', date: new Date(2021, 2, 28) },
  { id: 'e2', title: 'Car', amount: '2226.79', date: new Date(2021, 2, 28) }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(prevState => [expense, ...prevState]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
