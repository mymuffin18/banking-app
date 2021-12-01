import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';

import { UserContext } from './context/UserContextProvider';

function WidthrawalModal({ closeWithdrawModal, id }) {
	const { dispatch } = useContext(UserContext);

	const [amount, setAmount] = useState(0);

	const clickHandler = (e) => {
		e.preventDefault();

		dispatch({ type: 'WITHDRAW', id: id, amount: amount });

		closeWithdrawModal(false);
	};
	return ReactDOM.createPortal(
		<div className='modalBackGround'>
			<div className='modalContainer glass card'>
				<div className='title'>
					<h1>Withdraw</h1>
				</div>
				<div className='body'>
					<input
						type='number'
						min='0'
						placeholder='Withdraw Amount'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<div className='footer'>
					<button
						className='btn-blue'
						onClick={() => closeWithdrawModal(false)}
					>
						Cancel
					</button>
					<button className='btn-blue' onClick={clickHandler}>
						Continue
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default WidthrawalModal;
