import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContextProvider";
import Expenses from "./Expenses";
import ChangePasswordModal from "./ChangePasswordModal";
import ExpensesModal from "./ExpensesModal";

function UserDashboard() {
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch("LOGOUT");
    navigate("/");
  };

  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  const [openExpensesModal, setOpenExpensesModal] = useState(false);
  return (
    <div className="h-screen">
      <div className="bg-gradient-to-r from-blue-300 to-indigo-700 h-20 flex justify-center items-center mb-6">
        <h1 className="text-white">Budget Cashy++</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="row-span-2 col-span-2 h-60 rounded-3xl card">
          <h2>Container of Info</h2>
        </div>

        <button className="rounded-3xl card" onClick={handleLogout}>
          <h2>Logout</h2>
        </button>

        <button
          className="rounded-3xl card"
          onClick={() => {
            setOpenChangePasswordModal(true);
          }}
        >
          <h2>Change Password</h2>
        </button>
        {openChangePasswordModal && (
          <ChangePasswordModal
            closeChangePasswordModal={setOpenChangePasswordModal}
          />
        )}

        <button
          className="rounded-3xl card"
          onClick={() => {
            setOpenExpensesModal(true);
          }}
        >
          <h2>Add Expenses</h2>
        </button>
        {openExpensesModal && (
          <ExpensesModal closeExpensesModal={setOpenExpensesModal} />
        )}
      </div>
      <div>{/* <Expenses /> */}</div>
    </div>
  );
}

export default UserDashboard;
