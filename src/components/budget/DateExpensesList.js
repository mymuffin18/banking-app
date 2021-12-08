import React, { useContext } from 'react';
import { useAuth } from '../context/AuthContextProvider';
import { ExpenseContext } from '../context/ExpenseContextProvider';
import { UserContext } from '../context/UserContextProvider';
function DateExpensesList() {
	const { expenses, dispatch } = useContext(ExpenseContext);
	const { dispatch: userDispatch } = useContext(UserContext);
	const { state } = useAuth();

	const handleClick = (e, id, amount) => {
		e.preventDefault();

		dispatch({ type: 'DELETE_EXPENSE', id: id });
		userDispatch({
			type: 'DEPOSIT',
			id: state.id,
			deposit: parseInt(amount),
		});
	};
	return (
		<div className='flex justify-center'>
			<div className='w-4/5 xs:mt-5 md:mt-52 lg:mt-20 lg:mb-20 xs:max-h-96 md:h-80 lg:h-80 card glass overflow-scroll overflow-x-hidden'>
				<h1 className='text-center'>Expenses Tracker</h1>
				<div className='flex flex-row justify-center'>
					<div className=' border border-solid border-black w-1/4 text-center lg:text-xl font-semibold'>
						Date
					</div>
					<div className='border border-solid border-black w-1/3 text-center lg:text-xl font-semibold'>
						Expenses
					</div>
					<div className='border border-solid border-black w-1/4 text-center lg:text-xl font-semibold'>
						Amount
					</div>
					<div className='border border-solid border-black w-1/4 text-center lg:text-xl font-semibold'>
						Function
					</div>
				</div>
				<div>
					{expenses
						.filter((expense) => expense.user_id === state.id)
						.map((userExpense) => (
							<div
								key={userExpense.id}
								className='flex justify-center items-center'
							>
								<div className='w-5/6'>
									<div className='flex justify-center items-center'>
										<div className='w-1/2 text-center lg:text-xl'>
											{userExpense.date}
										</div>{' '}
										<div className='w-2/3 text-center lg:text-xl'>
											{userExpense.text}
										</div>{' '}
										<div className='w-1/2 text-center lg:text-xl'>
											{userExpense.amount}
										</div>
										<div className='w-1/2 flex justify-center '>
											<button
												className='p-2 rounded-xl bg-red-500 text-white'
												onClick={(e) =>
													handleClick(
														e,
														userExpense.id,
														userExpense.amount
													)
												}
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

export default DateExpensesList;
