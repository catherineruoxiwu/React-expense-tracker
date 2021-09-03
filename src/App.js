import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: '26.79', date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'Car Insurance', amount: '26.79', date: new Date(2021, 2, 28) }
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
