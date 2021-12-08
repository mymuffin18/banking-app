import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({
  input,
  setInput,
  expenses,
  setExpenses,
  editExpense,
  setEditExpense,
}) => {
  const updateExpense = (title, id, completed) => {
    const newExpense = expenses.map((expense) =>
      expense.id === id ? (title, id, completed) : expense
    );
    setExpenses(newExpense);
    setEditExpense("");
  };

  useEffect(() => {
    if (editExpense) {
      setInput(editExpense.title);
    } else {
      setInput("");
    }
  }, [setInput, editExpense]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editExpense) {
      setExpenses([
        ...expenses,
        { id: uuidv4(), title: input, completed: false },
      ]);
      setInput("");
    } else {
      updateExpense(input, editExpense.id, editExpense.completed);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <form onSubmit={onFormSubmit}>
          <input
            type="date"
            placeholder="Enter Expense"
            // value={date}
            required
            // onChange={onInputChange}
          />
          <input
            type="text"
            placeholder="Enter Expense"
            value={input}
            required
            onChange={onInputChange}
          />
          <input
            type="number"
            placeholder="Enter Expense"
            // value={amount}
            required
            // onChange={onInputChange}
          />
          <button className="btn-gradient" type="submit">
            {editExpense ? "OK" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
