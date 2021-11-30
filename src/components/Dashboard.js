import React, { useState } from 'react';

import UserList from './UsersList';
import { useNavigate } from 'react-router-dom';
import DepositModal from './DepositModal';
import WithdrawModal from './WithdrawModal';
import TransferModal from './TransferModal';

function Dashboard() {
	const navigate = useNavigate();
	const [openDepositModal, setOpenDepositModal] = useState(false);
	const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
	const [openTransferModal, setOpenTransferModal] = useState(false);

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
				<DepositModal closeDepositModal={setOpenDepositModal} />
			)}

			<button
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

			<UserList />
		</div>
	);
}

export default Dashboard;
