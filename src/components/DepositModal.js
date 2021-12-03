import React, { useContext, useState } from 'react';
import { UserContext } from './context/UserContextProvider';
import ReactDOM from 'react-dom';

function DepositModal({ closeDepositModal, id }) {
	const { dispatch } = useContext(UserContext);

	const [depositAmount, setDepositAmount] = useState(0);

	const depositHandler = (e) => {
		e.preventDefault();

		dispatch({
			type: 'DEPOSIT',
			id: id,
			deposit: parseInt(depositAmount),
		});
		setDepositAmount(0);
		closeDepositModal(false);
	};
	return ReactDOM.createPortal(
		<div className='modalBackGround'>
			<div className='modalContainer glass card'>
				<div className='title'>
					<h1>Deposit</h1>
				</div>
				<div className='body'>
					<input
						type='number'
						min='0'
						placeholder='Deposit Amount'
						value={depositAmount}
						onChange={(e) => setDepositAmount(e.target.value)}
					/>
				</div>
				<div className='footer'>
					<button
						className='btn-blue'
						onClick={() => closeDepositModal(false)}
					>
						Cancel
					</button>
					<button className='btn-blue' onClick={depositHandler}>
						Continue
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default DepositModal;
