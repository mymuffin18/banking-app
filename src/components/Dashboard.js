import React, { useState, useContext } from 'react';

import UserList from './UsersList';
import { useNavigate } from 'react-router-dom';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import TransferModal from './TransferModal';
import { useAuth } from './context/AuthContextProvider';
import { UserContext } from './context/UserContextProvider';

function Dashboard() {
	const navigate = useNavigate();
	const [openDepositModal, setOpenDepositModal] = useState(false);
	const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
	const [openTransferModal, setOpenTransferModal] = useState(false);
	const { users } = useContext(UserContext);

	console.log(users);
	const { dispatch } = useAuth();

	const [id, setId] = useState(undefined);

	const clickHandler = (id) => {
		setId(id);
	};

	const handleLogout = () => {
		dispatch('LOGOUT');
		navigate('/');
	};

	return (
		<div className='h-screen'>
			<div>Dashboard</div>

			<button
				onClick={() => {
					setOpenDepositModal(true);
				}}
			>
				Deposit
			</button>
			{openDepositModal && (
				<DepositModal
					closeDepositModal={setOpenDepositModal}
					id={id}
				/>
			)}

			<button
				onClick={() => {
					setOpenWithdrawModal(true);
				}}
			>
				Widthraw
			</button>
			{openWithdrawModal && (
				<WithdrawModal
					closeWithdrawModal={setOpenWithdrawModal}
					id={id}
				/>
			)}

			<button
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
				onClick={() => {
					navigate('/create');
				}}
			>
				Create Account
			</button>

			<button className='btn-blue' onClick={handleLogout}>
				Logout
			</button>

			<UserList clickHandler={clickHandler} />
		</div>
	);
}

export default Dashboard;
