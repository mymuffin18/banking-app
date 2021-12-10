import React, { useContext } from "react";
import { useAuth } from "../context/AuthContextProvider";
import { ExpenseContext } from "../context/ExpenseContextProvider";
import { UserContext } from "../context/UserContextProvider";
function DateExpensesList() {
  const { expenses, dispatch } = useContext(ExpenseContext);
  const { dispatch: userDispatch } = useContext(UserContext);
  const { state } = useAuth();

  const handleClick = (e, id, amount) => {
    e.preventDefault();

    dispatch({ type: "DELETE_EXPENSE", id: id });
    userDispatch({
      type: "DEPOSIT",
      id: state.id,
      deposit: parseInt(amount),
    });
  };
  return (
    <div className="flex justify-center">
      <div className="w-5/6 mt-5 md:mt-10 lg:mt-20 xl:mt-20 2xl:mt-20 lg:mb-20 max-h-48 md:max-h-96 lg:max-h-96 modalCard modalContainer overflow-scroll overflow-x-hidden">
        <h1 className="text-center dark:text-pink-600">Expenses Tracker</h1>
        <div className="flex flex-row justify-center">
          <div className=" border border-solid border-indigo-700 w-1/6 dark:border-pink-700">
            <p className="font-semibold text-center dark:text-pink-600">Date</p>
          </div>
          <div className="border border-solid border-indigo-700 w-1/3 dark:border-pink-700">
            <p className="font-semibold text-center dark:text-pink-600">
              Expenses
            </p>
          </div>
          <div className="border border-solid border-indigo-700 w-1/6 dark:border-pink-700">
            <p className="font-semibold text-center dark:text-pink-600">
              Amount
            </p>
          </div>
          <div className="border border-solid border-indigo-700 w-1/6 dark:border-pink-700">
            <p className="font-semibold text-center dark:text-pink-600"></p>
          </div>
        </div>
        <div>
          {expenses
            .filter((expense) => expense.user_id === state.id)
            .map((userExpense) => (
              <div
                key={userExpense.id}
                className="flex justify-center items-center "
              >
                <div className="w-5/6">
                  <div className="flex justify-center items-center">
                    <div className="w-1/6">
                      <p className="text-center dark:text-pink-600">
                        {userExpense.date}
                      </p>
                    </div>{" "}
                    <div className="w-5/12">
                      <p className="text-center dark:text-pink-600">
                        {userExpense.text}
                      </p>
                    </div>{" "}
                    <div className="w-1/6">
                      <p className="text-center dark:text-pink-600">
                        {userExpense.amount}
                      </p>
                    </div>
                    <div className="w-1/6 flex justify-center ">
                      <p
                        className="underline text-center cursor-pointer dark:text-pink-600"
                        onClick={(e) =>
                          handleClick(e, userExpense.id, userExpense.amount)
                        }
                      >
                        Delete
                      </p>
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
