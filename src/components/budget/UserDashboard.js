import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
import { useAuth } from '../context/AuthContextProvider';
import InfoContainer from '../InfoContainer';

function UserDashboard() {
	const { state, dispatch } = useAuth();
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch('LOGOUT');
		navigate('/');
	};
	return (
		<div className='h-screen'>
			<div className='bg-gradient-to-r from-blue-300 to-indigo-700 h-20 flex justify-center items-center mb-6'>
				<h1 className='text-white'>Budget Cashy++</h1>
			</div>
			<div className='grid grid-cols-5 gap-4'>
				<div className='row-span-2 col-span-2 h-60 rounded-3xl card'>
					<InfoContainer id={state.id} />
				</div>
				{/* <button
					className='rounded-3xl card'
					onClick={() => navigate('/create')}
				>
					<h2>Create Account</h2>
				</button>
				<button
					className='rounded-3xl card'
					onClick={() => {
						setOpenDepositModal(true);
					}}
					disabled={id === undefined ? true : false}
				>
					<h2>Deposit</h2>
				</button>
				{openDepositModal && (
					<DepositModal
						closeDepositModal={setOpenDepositModal}
						id={id}
					/>
				)}
=======
import { useAuth } from "../context/AuthContextProvider";
import Expenses from "./Expenses";
import ChangePasswordModal from "./ChangePasswordModal";
import ExpensesModal from "./ExpensesModal";
import DateExpenseList from "./DateExpensesList";
import InfoContainer from '../InfoContainer';
function UserDashboard() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch("LOGOUT");
    navigate("/");
  };
>>>>>>> react-table

  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  const [openExpensesModal, setOpenExpensesModal] = useState(false);
  const [expenses, setExpenses] = useState({
    date: "",
    expense: "",
    amount: 0,
  });
  return (
    <div className="h-screen">
      <div className="bg-gradient-to-r from-blue-300 to-indigo-700 h-20 flex justify-center items-center mb-6">
        <h1 className="text-white">Budget Cashy++</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="row-span-2 col-span-2 h-60 rounded-3xl card">
          <InfoContainer id={state.id} />
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
          <ExpensesModal
            closeExpensesModal={setOpenExpensesModal}
            expenses={expenses}
            setExpenses={setExpenses}
          />
        )}
      </div>
      <div>{/* <Expenses /> */}</div>
      <div>
        <DateExpenseList expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
}

export default UserDashboard;
