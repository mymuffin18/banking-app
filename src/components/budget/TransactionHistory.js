import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { TransactionContext } from "../context/TransactionContextProvider";

function TransactionHistory() {
  const { transactions } = useContext(TransactionContext);
  const navigate = useNavigate();
  const { state } = useAuth();
  return (
    <div>
      <div>
        <h1>Transaction History</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="glass card h-full flex justify-center items-center flex-col">
          <div>
            <h2>Deposit</h2>
          </div>
          <div className="card w-4/5 h-5/6 overflow-scroll overflow-x-hidden">
            <div className="flex flex-row justify-center items-center">
              <div className="lg:text-xl font-semibold  w-1/3 text-center text-indigo-600">
                Date
              </div>
              <div className="lg:text-xl font-semibold  w-1/3 text-center text-indigo-600">
                Amount
              </div>
            </div>
            {transactions.deposit
              .filter((deposit) => deposit.user_id === state.id)
              .map((deposit) => (
                <div className="flex flex-row justify-center items-center">
                  <div className="lg:text-md  w-1/3 text-center text-blue-600">
                    {deposit.date}
                  </div>
                  <div className="lg:text-md  w-1/3 text-center text-blue-600">
                    {deposit.amount}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="glass card h-96 flex justify-center items-center flex-col">
          <div>
            <h2>Withdraw</h2>
          </div>
          <div className="card w-4/5 h-5/6 overflow-scroll overflow-x-hidden">
            <div className="flex flex-row justify-center items-center">
              <div className="lg:text-xl font-semibold border border-solid border-indigo-700 w-1/3 text-center text-indigo-600">
                Date
              </div>
              <div className="lg:text-xl font-semibold border border-solid border-indigo-700 w-1/3 text-center text-indigo-600">
                Amount
              </div>
            </div>
            {transactions.withdraw
              .filter((withdraw) => withdraw.user_id === state.id)
              .map((withdraw) => (
                <div className="flex flex-row justify-center items-center">
                  <div className="lg:text-md  w-1/3 text-center text-blue-600">
                    {withdraw.date}
                  </div>
                  <div className="lg:text-md  w-1/3 text-center text-blue-600">
                    {withdraw.amount}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="glass card h-96 flex justify-center items-center flex-col">
          <div>
            <h2>Transfer</h2>
          </div>
          <div className="card w-4/5 h-5/6 overflow-scroll overflow-x-hidden">
            <div className="flex flex-row justify-center items-center">
              <div className="lg:text-xl font-semibold border border-solid border-indigo-700 w-1/3 text-center text-indigo-600">
                Date
              </div>
              <div className="lg:text-xl font-semibold border border-solid border-indigo-700 w-1/3 text-center text-indigo-600">
                Amount
              </div>
              <div className="lg:text-xl font-semibold border border-solid border-indigo-700 w-1/3 text-center text-indigo-600">
                to account
              </div>
            </div>
            {transactions.transfer
              .filter((transfer) => transfer.user_id === state.id)
              .map((transfer) => (
                <div className="flex flex-row justify-center items-center">
                  <div className="lg:text-md   w-1/3 text-center text-blue-600">
                    {transfer.date}
                  </div>
                  <div className="lg:text-md   w-1/3 text-center text-blue-600">
                    {transfer.amount}
                  </div>
                  <div className="lg:text-md   w-1/3 text-center text-blue-600">
                    {transfer.transfer_to}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="btn-gradient mt-80"
          onClick={() => navigate("/user")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default TransactionHistory;
