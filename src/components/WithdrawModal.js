import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { TransactionContext } from './context/TransactionContextProvider';

import { UserContext } from './context/UserContextProvider';

function WidthrawalModal({ closeWithdrawModal, id }) {
	const { dispatch, users } = useContext(UserContext);
	const { dispatch: tdispatch } = useContext(TransactionContext);

	const [amount, setAmount] = useState(0);
	const [error, setError] = useState('');

	const user = users.find((user) => user.id === id);
	const clickHandler = (e) => {
		e.preventDefault();
		if (user.balance < amount) {
			setError('Not enough balance');
			setAmount(0);
		} else if (amount < 0) {
			setError('Invalid input');
			setAmount(0);
		} else {
			dispatch({ type: 'WITHDRAW', id: id, amount: amount });
			tdispatch({
				type: 'WITHDRAW_TRANSACTION',
				id: id,
				amount: amount,
			});
			setAmount(0);
			closeWithdrawModal(false);
		}
	};
	return ReactDOM.createPortal(
		<div className='modalBackGround '>
			<div className='modalContainer glass modalCard px-20 py-10'>
				<div className='title'>
					<h1 className='dark:text-pink-600'>Withdraw</h1>
				</div>
				<div className='body flex-col'>
					<input
						type='number'
						min='0'
						placeholder='Withdraw Amount'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
					{error === '' ? (
						''
					) : (
						<span className='text-sm block text-red-500'>
							{error}
						</span>
					)}
				</div>
				<div className='footer'>
					<button
						className='btn-gradient dark:bg-gradient-pink'
						onClick={() => closeWithdrawModal(false)}
					>
						Cancel
					</button>
					<button
						className='btn-gradient dark:bg-gradient-pink'
						onClick={clickHandler}
					>
						Continue
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default WidthrawalModal;
