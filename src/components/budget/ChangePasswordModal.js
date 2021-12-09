import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAuth } from '../context/AuthContextProvider';
import { UserContext } from '../context/UserContextProvider';

function ChangePasswordModal({ closeChangePasswordModal }) {
	const [password, setPassword] = useState('');
	const [confPassword, setConfPassword] = useState('');
	const { state } = useAuth();
	const { dispatch } = useContext(UserContext);
	const [error, setError] = useState('');

	const handleClick = (e) => {
		e.preventDefault();

		if (password.length === 0 || confPassword.length === 0) {
			setError('Inputs cannot be empty.');
		} else if (password !== confPassword) {
			setError('Password do not match.');
		} else {
			dispatch({
				type: 'CHANGE_PASSWORD',
				id: state.id,
				newPassword: password,
			});

			setPassword('');
			setConfPassword('');
			closeChangePasswordModal(false);
		}
	};
	return ReactDOM.createPortal(
		<div className='modalBackGround'>
			<div className='modalContainer glass modalCard px-20 py-10'>
				<div className='title'>
					<h1 className='dark:text-pink-600'>Password</h1>
				</div>
				<div className='body flex-col'>
					<input
						type='password'
						placeholder='Enter new password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='body flex-col'>
					<input
						type='password'
						placeholder='confirm password'
						value={confPassword}
						onChange={(e) => setConfPassword(e.target.value)}
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
						onClick={() => closeChangePasswordModal(false)}
					>
						Cancel
					</button>
					<button
						className='btn-gradient dark:bg-gradient-pink'
						onClick={(e) => handleClick(e)}
					>
						Continue
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('portal')
	);
}

export default ChangePasswordModal;
