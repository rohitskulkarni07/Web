import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, date, amount }) => {
  return (
    <li>
      <Card>
        <div className="expense-item">
          <ExpenseDate date={date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">&#8377;{amount}/- </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
