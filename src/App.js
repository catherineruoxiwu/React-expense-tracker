import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: '26.79', date: new Date(2021, 2, 28) },
    { id: 'e2', title: 'Car Insurance', amount: '26.79', date: new Date(2021, 2, 28) }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
