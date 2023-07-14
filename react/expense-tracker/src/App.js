import React from "react";
import Expense from "./components/Expenses/Expense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 50.75,
      date: new Date(2023, 7, 14)
    },
    {
      id: "e2",
      title: "New Telivision",
      amount: 14000.05,
      date: new Date(2023, 2, 12)
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 22750.67,
      date: new Date(2023, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 2500,
      date: new Date(2023, 5, 12)
    }
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Let's get started!"),
  //   React.createElement(Expense, { expenses }, "")
  // );
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
