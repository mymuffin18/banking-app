import React, { useState, useContext } from 'react';
import { UserContext } from './context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
function CreateAccount() {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		balance: 0,
	});

	const [confirmPassword, setConfirmPassword] = useState('');

	const [firstNameError, setFirstNameError] = useState('');
	const [lastNameError, setLastNameError] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const { dispatch, users } = useContext(UserContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setFirstNameError('');
		setLastNameError('');
		setUsernameError('');
		setPasswordError('');

		let reg = /\d+/;
		let dupe = users.find((i) => i.username === user.username);
		console.log(dupe);
		if (reg.test(user.firstName) || reg.test(user.lastName)) {
			alert('Cannot put number in names');
		} else if (user.firstName.length === 0) {
			setFirstNameError('Please enter your first name');
		} else if (user.lastName.length === 0) {
			setLastNameError('Please enter your last name');
		} else if (user.username.length === 0) {
			setUsernameError('Please enter a username');
		} else if (
			user.password.length === 0 ||
			confirmPassword.length === 0
		) {
			setPasswordError('Password empty');
		} else if (dupe !== undefined) {
			setUsernameError('Username already taken.');
		} else if (user.password !== confirmPassword) {
			setPasswordError('Password not match');
		} else {
			const balance = parseInt(user.balance);
			dispatch({
				type: 'ADD_USER',
				user: {
					firstName: user.firstName,
					lastName: user.lastName,
					username: user.username,
					password: user.password,
					balance: balance,
				},
			});
			setUser({
				firstName: '',
				lastName: '',
				balance: 0,
			});
			navigate('/dashboard');
		}
	};
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='lg:w-auto lg:h-auto p-5 rounded-xl card w-auto xl:w-auto'>
				<form
					className='flex justify-center items-center flex-col'
					onSubmit={handleSubmit}
				>
					<h1 className='text-5xl dark:text-pink-600'>
						Cashy++
					</h1>
					<div className='mb-3'>
						<input
							type='text'
							value={user.firstName}
							placeholder='firstname'
							onChange={(e) =>
								setUser({
									...user,
									firstName: e.target.value,
								})
							}
						/>
						{firstNameError.length !== '' ? (
							<span className='text-red-500 text-xs block'>
								{firstNameError}
							</span>
						) : (
							''
						)}
					</div>

					<div className='mb-6'>
						<input
							type='text'
							value={user.lastName}
							placeholder='lastname'
							onChange={(e) =>
								setUser({
									...user,
									lastName: e.target.value,
								})
							}
						/>
						{lastNameError.length !== '' ? (
							<span className='text-red-500 text-xs block'>
								{lastNameError}
							</span>
						) : (
							''
						)}
					</div>

					<div className='mb-6'>
						<label className='text-sm text-left text-red-500 block'>
							*initial deposit
						</label>
						<input
							type='text'
							value={user.balance}
							onChange={(e) =>
								setUser({
									...user,
									balance: e.target.value,
								})
							}
						/>
					</div>

					<div className='mb-6'>
						<input
							type='text'
							value={user.username}
							onChange={(e) =>
								setUser({
									...user,
									username: e.target.value,
								})
							}
							placeholder='username'
						/>
						{usernameError.length !== '' ? (
							<span className='text-red-500 text-xs block'>
								{usernameError}
							</span>
						) : (
							''
						)}
					</div>
					<div className='mb-6'>
						<input
							type='password'
							value={user.password}
							onChange={(e) =>
								setUser({
									...user,
									password: e.target.value,
								})
							}
							placeholder='password'
						/>
						{passwordError.length !== '' ? (
							<span className='text-red-500 text-xs block'>
								{passwordError}
							</span>
						) : (
							''
						)}
					</div>
					<div className='mb-6'>
						<input
							type='password'
							value={confirmPassword}
							onChange={(e) =>
								setConfirmPassword(e.target.value)
							}
							placeholder='confirm password'
						/>
					</div>

					<div className='flex'>
						<button
							className='btn-gradient dark:bg-gradient-pink'
							onClick={(e) => navigate('/dashboard')}
						>
							Back
						</button>
						<button
							className='btn-gradient dark:bg-gradient-pink'
							type='submit'
						>
							Create Account
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateAccount;
