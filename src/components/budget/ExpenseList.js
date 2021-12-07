import React from "react";

const ExpenseList = ({ expenses, setExpenses, setEditExpense }) => {
  const handleDelete = ({ id }) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleComplete = (expense) => {
    setExpenses(
      expenses.map((item) => {
        if (item.id === expense.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findExpense = expenses.find((expense) => expense.id === id);
    setEditExpense(findExpense);
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        {expenses.map((expense) => (
          <li className="list-items" key={expense.id}>
            <input
              type="date"
              value={expense.date}
              className={`input-style ${expense.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />
            <input
              type="text"
              value={expense.title}
              className={`input-style ${expense.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />
            <input
              type="number"
              value={expense.amount}
              className={`input-style ${expense.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />
            {/* <div> */}
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(expense)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(expense)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(expense)}
            >
              <i className="fa fa-trash"></i>
            </button>
            {/* </div> */}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
