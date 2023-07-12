import React, { useState } from "react";

import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "2300.75",
    date: new Date(2022, 11, 8),
  },
  { id: "e2", title: "Nestle Oats", amount: "1023.55", date: new Date(2021, 3, 8) },
  { id: "e3", title: "London Yogurt", amount: "1753.55", date: new Date(2022, 2, 8) },
  { id: "e4", title: "Gold Gym", amount: "6000.00", date: new Date(2019, 1, 8) },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
