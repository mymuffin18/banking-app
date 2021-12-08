import React from "react";
import ReactDOM from "react-dom";

function ExpensesModal({ closeExpensesModal, expenses, setExpenses }) {
  const onSubmit = (event) => {
    event.preventDefault();
    setExpenses({ ...expenses, date: "", expense: "", amount: 0 });
    closeExpensesModal(false);
  };
  return ReactDOM.createPortal(
    <div className="modalBackGround">
      <div className="modalContainer glass modalCard">
        <div className="title">
          <h1>Add Expenses</h1>
        </div>
        <div className="body flex-col">
          <input
            type="date"
            value={expenses.date}
            onChange={(event) =>
              setExpenses({ ...expenses, date: event.target.value })
            }
          />
          <p>{expenses.date}</p>
        </div>
        <div className="body flex-col">
          <input
            type="text"
            placeholder="add expense"
            value={expenses.expense}
            onChange={(event) =>
              setExpenses({ ...expenses, expense: event.target.value })
            }
          />
          <p>{expenses.expense}</p>
        </div>
        <div className="body flex-col">
          <input
            type="number"
            value={expenses.amount}
            onChange={(event) =>
              setExpenses({ ...expenses, amount: event.target.value })
            }
          />
          <p>{expenses.amount}</p>
          {/* {error === "" ? (
                ""
              ) : (
                <span className="text-sm block text-red-500">{error}</span>
              )} */}
        </div>
        <div className="footer">
          <button
            className="btn-gradient"
            onClick={() => closeExpensesModal(false)}
          >
            Cancel
          </button>
          <button className="btn-gradient" onClick={onSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default ExpensesModal;
