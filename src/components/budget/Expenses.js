import React, { useState } from "react";
import Form from "./Form";
import ExpenseList from "./ExpenseList";

const Expenses = () => {
  const [input, setInput] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editExpenses, setEditExpenses] = useState(null);
  return (
    <div>
      <div>
        <div>
          <h1>Expenses</h1>
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            expenses={expenses}
            setExpenses={setExpenses}
            editExpenses={editExpenses}
            setEditExpenses={setEditExpenses}
          />
        </div>
        <div>
          <ExpenseList
            expenses={expenses}
            setExpenses={setExpenses}
            setEditExpenses={setEditExpenses}
          />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
