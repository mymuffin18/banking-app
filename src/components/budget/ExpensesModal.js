import React from "react";
import ReactDOM from "react-dom";

function ExpensesModal({ closeExpensesModal }) {
  return ReactDOM.createPortal(
    <div className="modalBackGround">
      <div className="modalContainer glass modalCard">
        <div className="title">
          <h1>Add Expenses</h1>
        </div>
        <div className="body flex-col">
          <input type="date" />
          {/* {error === "" ? (
                ""
              ) : (
                <span className="text-sm block text-red-500">{error}</span>
              )} */}
        </div>
        <div className="body flex-col">
          <input type="text" placeholder="add expense" />
          {/* {error === "" ? (
                ""
              ) : (
                <span className="text-sm block text-red-500">{error}</span>
              )} */}
        </div>
        <div className="body flex-col">
          <input type="number" />
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
          <button className="btn-gradient">Continue</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default ExpensesModal;
