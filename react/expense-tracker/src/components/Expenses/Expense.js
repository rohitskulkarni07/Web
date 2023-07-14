import Card from "../UI/Card";
import "./Expense.css";

import ExpenseItem from "./ExpenseItem";
const Expense = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((e) => (
        <ExpenseItem title={e.title} date={e.date} amount={e.amount} />
      ))}
    </Card>
  );
};

export default Expense;
