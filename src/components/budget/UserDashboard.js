import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContextProvider";
import ChangePasswordModal from "./ChangePasswordModal";
import ExpensesModal from "./ExpensesModal";
import DateExpenseList from "./DateExpensesList";
import InfoContainer from "../InfoContainer";
import DepositModal from "../DepositModal";
import WithdrawModal from "../WithdrawModal";
import TransferModal from "../TransferModal";

function UserDashboard() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch("LOGOUT");
    navigate("/");
  };
  const [openDepositModal, setOpenDepositModal] = useState(false);
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  const [openExpensesModal, setOpenExpensesModal] = useState(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);

  return (
    <div className="h-screen">
      <div className="bg-gradient-to-r from-blue-300 to-indigo-700 h-20 flex justify-center items-center mb-6 dark:bg-gradient-pink">
        <h1 className="text-white">Budget Cashy++</h1>
      </div>
      <div className="grid lg:grid-cols-5 gap-4 mb-6">
        <div className="row-span-2 col-span-2 lg:h-60 rounded-3xl modalCard modalContainer">
          <InfoContainer id={state.id} />
        </div>

        <button
          className="rounded-3xl modalCard modalContainer"
          onClick={handleLogout}
        >
          <h2 className="dark:text-pink-600">Logout</h2>
        </button>

        <button
          className="rounded-3xl modalCard modalContainer"
          onClick={() => {
            setOpenChangePasswordModal(true);
          }}
        >
          <h2 className="dark:text-pink-600">Account Settings</h2>
        </button>
        {openChangePasswordModal && (
          <ChangePasswordModal
            closeChangePasswordModal={setOpenChangePasswordModal}
          />
        )}

        <button
          className="rounded-3xl modalCard modalContainer"
          onClick={() => {
            setOpenExpensesModal(true);
          }}
        >
          <h2 className="dark:text-pink-600">Add Expenses</h2>
        </button>
        {openExpensesModal && (
          <ExpensesModal closeExpensesModal={setOpenExpensesModal} />
        )}

        <button
          className="rounded-3xl modalCard modalContainer"
          onClick={() => {
            setOpenDepositModal(true);
          }}
        >
          <h2 className="text-center dark:text-pink-600">Deposit</h2>
        </button>
        {openDepositModal && (
          <DepositModal closeDepositModal={setOpenDepositModal} id={state.id} />
        )}

        <button
          onClick={() => {
            setOpenWithdrawModal(true);
          }}
          className="rounded-3xl modalCard modalContainer"
        >
          <h2 className="text-center dark:text-pink-600">Withdraw</h2>
        </button>
        {openWithdrawModal && (
          <WithdrawModal
            closeWithdrawModal={setOpenWithdrawModal}
            id={state.id}
          />
        )}

        <button
          onClick={() => {
            setOpenTransferModal(true);
          }}
          className="rounded-3xl modalCard modalContainer"
        >
          <h2 className="text-center dark:text-pink-600">Transfer</h2>
        </button>
        {openTransferModal && (
          <TransferModal
            closeTransferModal={setOpenTransferModal}
            id={state.id}
          />
        )}
      </div>
      <div className="flex justify-end">
        <button
          className="rounded-3xl modalCard modalContainer py-20 px-20"
          onClick={() => navigate("/history")}
        >
          <h2 className="dark:text-pink-600">Transaction History</h2>
        </button>
      </div>
      <div>
        <DateExpenseList />
      </div>
    </div>
  );
}

export default UserDashboard;
