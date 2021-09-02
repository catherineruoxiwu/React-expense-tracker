import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const item1 = props.expenses[0];
  const item2 = props.expenses[1];
  return (
    <Card className="expenses">
      <ExpenseItem title={item1.title} amount={item1.amount} date={item1.date} />
      <ExpenseItem title={item2.title} amount={item2.amount} date={item2.date} />      
    </Card>
  );
}

export default Expenses;