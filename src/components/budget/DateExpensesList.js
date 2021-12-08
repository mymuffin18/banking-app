import React from "react";

function DateExpensesList({ expenses, setExpenses }) {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 mt-20 mb-20 h-80 card glass overflow-scroll overflow-x-hidden">
        <h1 className="text-center">Expenses Tracker</h1>
        <div className="flex flex-row justify-center">
          <div className="text-base font-semibold border border-solid border-black w-1/4 text-center">
            Date
          </div>
          <div className="text-base font-semibold border border-solid border-black w-1/3 text-center">
            Expenses
          </div>
          <div className="text-base font-semibold border border-solid border-black w-1/4 text-center">
            Amount
          </div>
        </div>
        <div>
          alalala
          {/* {expenses.map(({ expenses }) => (
            <li>
              <input
                type="text"
                value={expenses.expense}
                onChange={(event) => event.preventDefault()}
              />
            </li>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default DateExpensesList;
