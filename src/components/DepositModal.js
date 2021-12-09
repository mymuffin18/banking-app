import React, { useContext, useState } from 'react';
import { UserContext } from './context/UserContextProvider';
import ReactDOM from 'react-dom';
import { TransactionContext } from './context/TransactionContextProvider';

function DepositModal({ closeDepositModal, id }) {
	const { dispatch } = useContext(UserContext);
	const { dispatch: transactionDispatch } = useContext(TransactionContext);
	const [depositAmount, setDepositAmount] = useState(0);
	const [error, setError] = useState('');
	const depositHandler = (e) => {
		e.preventDefault();
		if (depositAmount > 0) {
			dispatch({
				type: 'DEPOSIT',
				id: id,
				deposit: parseInt(depositAmount),
			});
			transactionDispatch({
				type: 'DEPOSIT_TRANSACTION',
				id: id,
				amount: parseInt(depositAmount),
			});
			setDepositAmount(0);
			closeDepositModal(false);
		} else {
			setError('Invalid input');
			setDepositAmount(0);
		}
	};
	return ReactDOM.createPortal(
		<div className='modalBackGround'>
			<div className='modalContainer glass modalCard px-20 py-10'>
				<div className='title '>
					<h1 className='dark:text-pink-600'>Deposit</h1>
				</div>
				<div className='body flex-col'>
					<input
						type='number'
						min='0'
						placeholder='Deposit Amount'
						value={depositAmount}
						onChange={(e) => setDepositAmount(e.target.value)}
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
						onClick={() => closeDepositModal(false)}
					>
						Cancel
					</button>
					<button
						className='btn-gradient dark:bg-gradient-pink'
						onClick={depositHandler}
					>
						Continue
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default DepositModal;
