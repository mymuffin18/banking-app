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
				<h1 className='dark:text-pink-600'>Transaction History</h1>
			</div>
			<div className='flex justify-start'>
				<button
					className='btn-gradient mb-6 lg:px-10 dark:bg-gradient-pink'
					onClick={() => navigate('/user')}
				>
					Back
				</button>
			</div>
			<div className='grid lg:grid-cols-3 gap-4'>
				<div className='modalCard modalContainer h-36 md:h-56 lg:h-96 xl:h-96 2xl:h-96 flex justify-center items-center flex-col'>
					<div>
						<h2 className='dark:text-pink-600'>Deposit</h2>
					</div>
					<div className='card w-4/5 h-5/6 overflow-scroll overflow-x-hidden'>
						<div className='flex flex-row justify-center items-center'>
							<div className='text-xs md:text-3xl lg:text-xl xl:text-xl 2xl:text-xl font-semibold  w-1/3 text-center text-indigo-600 dark:text-pink-600'>
								Date
							</div>
							<div className='text-xs md:text-3xl lg:text-xl xl:text-xl 2xl:text-xl font-semibold  w-1/3 text-center text-indigo-600 dark:text-pink-600'>
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
									<div className='text-sm sm:text-md md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl  w-1/3 text-center text-blue-600 dark:text-pink-600'>
										{deposit.date}
									</div>
									<div className='text-sm sm:text-md md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl  w-1/3 text-center text-blue-600 dark:text-pink-600'>
										{deposit.amount}
									</div>
								</div>
							))}
					</div>
				</div>
				<div className='modalCard modalContainer h-36 md:h-56 lg:h-96 xl:h-96 2xl:h-96 flex justify-center items-center flex-col'>
					<div>
						<h2 className='dark:text-pink-600'>Withdraw</h2>
					</div>
					<div className='card w-4/5 h-5/6 overflow-scroll overflow-x-hidden'>
						<div className='flex flex-row justify-center items-center'>
							<div className='text-xs md:text-3xl lg:text-xl xl:text-xl 2xl:text-xl font-semibold  w-1/3 text-center text-indigo-600 dark:text-pink-600'>
								Date
							</div>
							<div className='text-xs md:text-3xl lg:text-xl xl:text-xl 2xl:text-xl font-semibold  w-1/3 text-center text-indigo-600 dark:text-pink-600'>
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
									<div className='text-sm sm:text-md md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl  w-1/3 text-center text-blue-600 dark:text-pink-600'>
										{withdraw.date}
									</div>
									<div className='text-sm sm:text-md md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl  w-1/3 text-center text-blue-600 dark:text-pink-600'>
										{withdraw.amount}
									</div>
								</div>
							))}
					</div>
				</div>
				<div className='modalCard modalContainer h-36 md:h-56 lg:h-96 xl:h-96 2xl:h-96 flex justify-center items-center flex-col'>
					<div>
						<h2 className='dark:text-pink-600'>Transfer</h2>
					</div>
					<div className='card w-4/5 h-5/6 overflow-scroll overflow-x-hidden'>
						<div className='flex flex-row justify-center items-center'>
							<div className='text-xs md:text-3xl lg:text-xl xl:text-xl 2xl:text-xl font-semibold  w-1/3 text-center text-indigo-600 dark:text-pink-600'>
								Date
							</div>
							<div className='text-xs md:text-3xl lg:text-xl xl:text-xl 2xl:text-xl font-semibold  w-1/3 text-center text-indigo-600 dark:text-pink-600'>
								Amount
							</div>
							<div className='text-xs md:text-3xl leading-3 lg:text-xl xl:text-xl 2xl:text-xl font-semibold  w-1/3 text-center text-indigo-600 dark:text-pink-600'>
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
									<div className='text-sm sm:text-md md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl   w-1/3 text-center text-blue-600 dark:text-pink-600'>
										{transfer.date}
									</div>
									<div className='text-sm sm:text-md md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl   w-1/3 text-center text-blue-600 dark:text-pink-600'>
										{transfer.amount}
									</div>
									<div className='text-xs md:text-sm lg:text-md  xl:text-xl 2xl:text-xl  w-1/3 text-center text-blue-600 dark:text-pink-600'>
										{transfer.transfer_to}
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TransactionHistory;
