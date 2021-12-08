import React from "react";
import { useNavigate } from "react-router-dom";

function TransactionHistory() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Transaction History</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="border-blue-700 border-2 h-full flex justify-center items-center flex-col">
          <div>Deposit</div>
          <div className="card w-4/5 h-5/6 overflow-scroll overflow-x-hidden">
            <div className="flex flex-row justify-center items-center">
              <div className="lg:text-xl font-semibold border border-solid border-black w-1/3 text-center">
                Date
              </div>
              <div className="lg:text-xl font-semibold border border-solid border-black w-1/3 text-center">
                Amount
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 h-96 flex justify-center items-center flex-col">
          <div>Withdraw</div>
          <div className="card w-4/5 h-5/6 overflow-scroll overflow-x-hidden">
            <div className="flex flex-row justify-center items-center">
              <div className="lg:text-xl font-semibold border border-solid border-black w-1/3 text-center">
                Date
              </div>
              <div className="lg:text-xl font-semibold border border-solid border-black w-1/3 text-center">
                Amount
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 h-96 flex justify-center items-center flex-col">
          <div>Transfer</div>
          <div className="card w-4/5 h-5/6 overflow-scroll overflow-x-hidden">
            <div className="flex flex-row justify-center items-center">
              <div className="lg:text-xl font-semibold border border-solid border-black w-1/3 text-center">
                Date
              </div>
              <div className="lg:text-xl font-semibold border border-solid border-black w-1/3 text-center">
                Amount
              </div>
              <div className="lg:text-xl font-semibold border border-solid border-black w-1/3 text-center">
                to account
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-gradient" onClick={() => navigate("/user")}>
        Back
      </button>
    </div>
  );
}

export default TransactionHistory;
