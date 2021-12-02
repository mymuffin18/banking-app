import React, { useContext, useState } from "react";
import { UserContext } from "./context/UserContextProvider";
import UserList from "./UsersList";
import { useNavigate } from "react-router-dom";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";
import TransferModal from "./TransferModal";

function Dashboard() {
  const navigate = useNavigate();
  const [openDepositModal, setOpenDepositModal] = useState(false);
  const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
  const [openTransferModal, setOpenTransferModal] = useState(false);

  const { users } = useContext(UserContext);

  return (
    <div className="h-screen">
      <h1>Dashboard</h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="row-span-2 col-span-2 bg-blue-500 card h-60 rounded-3xl">
          Container of Info
        </div>
        <button
          className="bg-blue-500 rounded-3xl"
          onClick={() => {
            setOpenDepositModal(true);
          }}
        >
          Deposit
        </button>
        {openDepositModal && (
          <DepositModal closeDepositModal={setOpenDepositModal} />
        )}

        <button
          className="bg-blue-500 rounded-3xl"
          onClick={() => {
            setOpenWithdrawModal(true);
          }}
        >
          Withdraw
        </button>
        {openWithdrawModal && (
          <WithdrawModal closeWithdrawModal={setOpenWithdrawModal} />
        )}

        <button
          className="bg-blue-500 rounded-3xl"
          onClick={() => {
            setOpenTransferModal(true);
          }}
        >
          Transfer
        </button>
        {openTransferModal && (
          <TransferModal closeTransferModal={setOpenTransferModal} />
        )}

        <button
          className="bg-blue-500 rounded-3xl"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create Account
        </button>

        <button className="bg-blue-500 rounded-3xl">Log-out</button>
      </div>

      <UserList />
    </div>
  );
}

export default Dashboard;
