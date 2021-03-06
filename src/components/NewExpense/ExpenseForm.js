import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [style, setStyle] = useState("Collapsed");
  const expenseFormContent = () => {
    if (style === "Collapsed") {
      return (
        <form>
          <div className="new-expense__control">
            <button onClick={changeStyleHandler}>Add Expense</button>
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={userInput.enteredTitle}
                onChange={titleChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={userInput.enteredAmount}
                onChange={amountChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={userInput.enteredDate}
                onChange={dateChangeHandler}
              ></input>
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={changeStyleHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      );
    }
  };

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  const changeStyleHandler = () => {
    setStyle(prevState => prevState === "Collapsed" ? "Add Expense" : "Collapsed");
  };

  return expenseFormContent();
};

export default ExpenseForm;
