import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { TransactionContext } from './context/TransactionContextProvider';
import { UserContext } from './context/UserContextProvider';

function TransferModal({ closeTransferModal, id }) {
	const { dispatch, users } = useContext(UserContext);
	const { dispatch: tdispatch } = useContext(TransactionContext);
	const [amount, setAmount] = useState(0);
	const [receiverId, setReceiverId] = useState('');
	const user = users.find((user) => user.id === id);
	const [error, setError] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		const receiver = users.find((user) => user.id === receiverId);
		console.log(receiver);
		if (user.balance < amount) {
			setError('Not enough balance');
			setAmount(0);
		} else if (receiverId === '' || receiver === undefined) {
			setError('di pwede');
		} else if (amount < 0) {
			setError('invalid amount');
		} else {
			dispatch({
				type: 'TRANSFER',
				senderId: id,
				receiverId: receiverId,
				amount: parseInt(amount),
			});
			tdispatch({
				type: 'TRANSFER_TRANSACTION',
				id: id,
				user: receiverId,
				amount: parseInt(amount),
			});
			closeTransferModal(false);
		}
		setAmount(0);
		setReceiverId('');
	};
	return ReactDOM.createPortal(
		<div className='modalBackGround'>
			<div className='modalContainer glass modalCard px-20 py-10'>
				<div className='title'>
					<h1 className='dark:text-pink-600'>Transfer</h1>
				</div>
				<div className='body flex-col'>
					<div>
						<input
							type='number'
							min='0'
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							placeholder='Transfer Amount'
						/>
					</div>
					<div className='mt-1'>
						<input
							type='text'
							placeholder='Account number'
							value={receiverId}
							onChange={(e) =>
								setReceiverId(e.target.value)
							}
						/>
						{error === '' ? (
							''
						) : (
							<span className='text-sm text-center block text-red-500'>
								{error}
							</span>
						)}
					</div>
				</div>
				<div className='footer'>
					<button
						className='btn-gradient dark:bg-gradient-pink'
						onClick={() => closeTransferModal(false)}
					>
						Cancel
					</button>
					<button
						className='btn-gradient dark:bg-gradient-pink'
						onClick={handleClick}
					>
						Continue
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default TransferModal;
