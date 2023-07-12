import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpenesList";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const filterChangeHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
};

export default Expense;
