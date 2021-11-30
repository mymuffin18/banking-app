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
      <div className="grid grid-cols-4 gap-4">
        <div className="row-span-2 bg-blue-500 card h-60">
          Container of Info
        </div>
        <button
          className="bg-blue-500"
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
          className="bg-blue-500"
          onClick={() => {
            setOpenWithdrawModal(true);
          }}
        >
          Widthraw
        </button>
        {openWithdrawModal && (
          <WithdrawModal closeWithdrawModal={setOpenWithdrawModal} />
        )}

        <button
          className="bg-blue-500"
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
          className="bg-blue-500"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create Account
        </button>

        <button className="bg-blue-500">Log-out</button>
      </div>

      <UserList />
    </div>
  );
}

export default Dashboard;
