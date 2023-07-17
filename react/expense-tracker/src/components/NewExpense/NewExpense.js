import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: performance.now().toString()
    };
    props.onAddExpenseHandler(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          stopEditingHandler={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
