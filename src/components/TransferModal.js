import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { UserContext } from './context/UserContextProvider';

function TransferModal({ closeTransferModal, id }) {
	const { dispatch, users } = useContext(UserContext);
	const [amount, setAmount] = useState(0);
	const [receiverId, setReceiverId] = useState('');
	const user = users.find((user) => user.id === id);

	const handleClick = (e) => {
		e.preventDefault();
		if (user.balance < amount) {
			alert('Not enough balance');
		} else {
			dispatch({
				type: 'TRANSFER',
				senderId: id,
				receiverId: receiverId,
				amount: parseInt(amount),
			});

			closeTransferModal(false);
		}
		setAmount(0);
		setReceiverId('');
	};
	return ReactDOM.createPortal(
		<div className='modalBackGround'>
			<div className='modalContainer glass card'>
				<div className='title'>
					<h1>Transfer</h1>
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
					</div>
				</div>
				<div className='footer'>
					<button
						className='btn-blue'
						onClick={() => closeTransferModal(false)}
					>
						Cancel
					</button>
					<button className='btn-blue' onClick={handleClick}>
						Continue
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default TransferModal;
