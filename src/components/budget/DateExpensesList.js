import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContextProvider";
function DateExpensesList() {
  const { expenses } = useContext(ExpenseContext);
  console.log(expenses);
  return (
    <div className="flex justify-center">
      <div className="w-4/5 xs:mt-5 md:mt-52 lg:mt-20 lg:mb-20 xs:max-h-96 md:h-80 lg:h-80 card glass overflow-scroll overflow-x-hidden">
        <h1 className="text-center">Expenses Tracker</h1>
        <div className="flex flex-row justify-center">
          <div className=" border border-solid border-black w-1/4 text-center lg:text-xl font-semibold">
            Date
          </div>
          <div className="border border-solid border-black w-1/3 text-center lg:text-xl font-semibold">
            Expenses
          </div>
          <div className="border border-solid border-black w-1/4 text-center lg:text-xl font-semibold">
            Amount
          </div>
        </div>
        <div>
          {expenses.map((expense) => (
            <div className="flex justify-center items-center">
              <div className="w-5/6">
                <div
                  key={expense.id}
                  className="flex justify-center items-center"
                >
                  <div className="w-1/2 text-center lg:text-xl">
                    {expense.date}
                  </div>{" "}
                  <div className="w-2/3 text-center lg:text-xl">
                    {expense.text}
                  </div>{" "}
                  <div className="w-1/2 text-center lg:text-xl">
                    {expense.amount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DateExpensesList;
