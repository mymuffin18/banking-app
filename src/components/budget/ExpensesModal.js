import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '../context/AuthContextProvider';
import { ExpenseContext } from '../context/ExpenseContextProvider';
import { UserContext } from '../context/UserContextProvider';
function ExpensesModal({ closeExpensesModal }) {
	const [expenses, setExpenses] = useState({
		date: '',
		expense: '',
		amount: 0,
	});
	const { dispatch } = useContext(ExpenseContext);
	const { dispatch: altDispatch } = useContext(UserContext);
	const { state } = useAuth();
	const [dateError, setDateError] = useState('');
	const [expenseError, setExpenseError] = useState('');
	const [amountError, setAmountError] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		if (expenses.date.length === 0) {
			setDateError('Please input a date');
		} else if (expenses.expense.length === 0) {
			setExpenseError('This field is empty.');
		} else if (expenses.amount === 0 || expenses.amount < 0) {
			setAmountError('Invalid Amount');
		} else {
			dispatch({
				type: 'ADD_EXPENSE',
				id: state.id,
				expense: {
					text: expenses.expense,
					date: expenses.date,
					amount: expenses.amount,
				},
			});

			altDispatch({
				type: 'WITHDRAW',
				id: state.id,
				amount: expenses.amount,
			});
			closeExpensesModal(false);
		}
	};
	return ReactDOM.createPortal(
		<div className='modalBackGround'>
			<div className='modalContainer glass modalCard px-20 py-10'>
				<div className='title'>
					<h1 className='dark:text-pink-600'>Add Expenses</h1>
				</div>
				<div className='body flex-col'>
					<input
						type='date'
						value={expenses.date}
						onChange={(event) =>
							setExpenses({
								...expenses,
								date: event.target.value,
							})
						}
					/>
					{dateError === '' ? (
						''
					) : (
						<span className='text-sm block text-red-500'>
							{dateError}
						</span>
					)}
				</div>
				<div className='body flex-col'>
					<input
						type='text'
						placeholder='add expense'
						value={expenses.expense}
						onChange={(event) =>
							setExpenses({
								...expenses,
								expense: event.target.value,
							})
						}
					/>
					{expenseError === '' ? (
						''
					) : (
						<span className='text-sm block text-red-500'>
							{expenseError}
						</span>
					)}
				</div>
				<div className='body flex-col'>
					<input
						type='number'
						value={expenses.amount}
						onChange={(event) =>
							setExpenses({
								...expenses,
								amount: event.target.value,
							})
						}
					/>
					{amountError === '' ? (
						''
					) : (
						<span className='text-sm block text-red-500'>
							{amountError}
						</span>
					)}
				</div>
				<div className='footer'>
					<button
						className='btn-gradient dark:bg-gradient-pink'
						onClick={() => closeExpensesModal(false)}
					>
						Cancel
					</button>
					<button
						className='btn-gradient dark:bg-gradient-pink'
						onClick={onSubmit}
					>
						Continue
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default ExpensesModal;
