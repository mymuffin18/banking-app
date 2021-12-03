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
			<h1>Dashboard</h1>
			<div className='grid grid-cols-5 gap-4'>
				<div className='row-span-2 col-span-2 bg-blue-500 card h-60 rounded-3xl'>
					Container of Info
				</div>
				<button
					className='bg-blue-500 rounded-3xl'
					onClick={() => {
						setOpenDepositModal(true);
					}}
				>
					Deposit
				</button>
				{openDepositModal && (
					<DepositModal
						closeDepositModal={setOpenDepositModal}
					/>
				)}

				<button
					className='bg-blue-500 rounded-3xl'
					onClick={() => {
						setOpenDepositModal(true);
					}}
					disabled={id === undefined ? true : false}
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
					disabled={id === undefined ? true : false}
					className='bg-blue-500 rounded-3xl'
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
					disabled={id === undefined ? true : false}
					className='bg-blue-500 rounded-3xl'
				>
					Transfer
				</button>
				{openTransferModal && (
					<TransferModal
						closeTransferModal={setOpenTransferModal}
						id={id}
					/>
				)}

				<button
					className='bg-blue-500 rounded-3xl'
					onClick={handleLogout}
				>
					Logout
				</button>
			</div>

			<UserList clickHandler={clickHandler} />
		</div>
	);
}

export default Dashboard;
