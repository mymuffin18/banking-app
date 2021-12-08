import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContextProvider';
import { TransactionContext } from '../context/TransactionContextProvider';

function TransactionHistory() {
	const { transactions } = useContext(TransactionContext);
	const navigate = useNavigate();
	const { state } = useAuth();
	return (
		<div>
			<div>
				<h1>Transaction History</h1>
			</div>
			<div className='grid grid-cols-3 gap-4'>
				<div className='border-blue-700 border-2 h-full flex justify-center items-center flex-col'>
					<div>Deposit</div>
					<div className='card w-4/5 h-5/6 overflow-scroll overflow-x-hidden'>
						<div className='flex flex-row justify-center items-center'>
							<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
								Date
							</div>
							<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
								Amount
							</div>
						</div>
						{transactions.deposit
							.filter(
								(deposit) =>
									deposit.user_id === state.id
							)
							.map((deposit) => (
								<div className='flex flex-row justify-center items-center'>
									<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
										{deposit.date}
									</div>
									<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
										{deposit.amount}
									</div>
								</div>
							))}
					</div>
				</div>
				<div className='bg-blue-500 h-96 flex justify-center items-center flex-col'>
					<div>Withdraw</div>
					<div className='card w-4/5 h-5/6 overflow-scroll overflow-x-hidden'>
						<div className='flex flex-row justify-center items-center'>
							<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
								Date
							</div>
							<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
								Amount
							</div>
						</div>
						{transactions.withdraw
							.filter(
								(withdraw) =>
									withdraw.user_id === state.id
							)
							.map((withdraw) => (
								<div className='flex flex-row justify-center items-center'>
									<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
										{withdraw.date}
									</div>
									<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
										{withdraw.amount}
									</div>
								</div>
							))}
					</div>
				</div>
				<div className='bg-blue-500 h-96 flex justify-center items-center flex-col'>
					<div>Transfer</div>
					<div className='card w-4/5 h-5/6 overflow-scroll overflow-x-hidden'>
						<div className='flex flex-row justify-center items-center'>
							<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
								Date
							</div>
							<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
								Amount
							</div>
							<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
								to account
							</div>
						</div>
						{transactions.transfer
							.filter(
								(transfer) =>
									transfer.user_id === state.id
							)
							.map((transfer) => (
								<div className='flex flex-row justify-center items-center'>
									<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
										{transfer.date}
									</div>
									<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
										{transfer.amount}
									</div>
									<div className='lg:text-xl font-semibold border border-solid border-black w-1/3 text-center'>
										{transfer.transfer_to}
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
			<button
				className='btn-gradient'
				onClick={() => navigate('/user')}
			>
				Back
			</button>
		</div>
	);
}

export default TransactionHistory;
