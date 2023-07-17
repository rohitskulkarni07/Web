import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expense;
