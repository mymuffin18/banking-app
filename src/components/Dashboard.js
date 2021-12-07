import React, { useState, useContext } from 'react';

import UserList from './UsersList';
import { useNavigate } from 'react-router-dom';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import TransferModal from './TransferModal';
import { useAuth } from './context/AuthContextProvider';
import { UserContext } from './context/UserContextProvider';
import InfoContainer from './InfoContainer';

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
			<div className='bg-gradient-to-r from-blue-300 to-indigo-700 h-20 flex justify-center items-center mb-6'>
				<h1 className='text-white'>Dashboard</h1>
			</div>
			<div className='grid grid-cols-5 gap-4'>
				<div className='row-span-2 col-span-2 h-60 rounded-3xl card'>
					<InfoContainer id={id} />
				</div>
				<button
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

				<button
					onClick={() => {
						setOpenWithdrawModal(true);
					}}
					disabled={id === undefined ? true : false}
					className='rounded-3xl card'
				>
					<h2>Withdraw</h2>
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
					className='rounded-3xl card'
				>
					<h2>Transfer</h2>
				</button>
				{openTransferModal && (
					<TransferModal
						closeTransferModal={setOpenTransferModal}
						id={id}
					/>
				)}

				<button className='rounded-3xl card' onClick={handleLogout}>
					<h2>Logout</h2>
				</button>
			</div>

			<UserList clickHandler={clickHandler} />
		</div>
	);
}

export default Dashboard;
