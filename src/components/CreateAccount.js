import React, { useState, useContext } from 'react';
import { UserContext } from './context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
function CreateAccount() {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		balance: 0,
	});
	const { dispatch } = useContext(UserContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const balance = parseInt(user.balance);
		dispatch({
			type: 'ADD_USER',
			user: {
				firstName: user.firstName,
				lastName: user.lastName,
				balance: balance,
			},
		});

		setUser({
			firstName: '',
			lastName: '',
			balance: 0,
		});

		navigate('/dashboard');
	};
	return (
		<div>
			<div>
				<h1> Create account</h1>
			</div>

			<form onSubmit={handleSubmit}>
				<label htmlFor='firstName'>firstname</label>
				<input
					type='text'
					value={user.firstName}
					onChange={(e) =>
						setUser({ ...user, firstName: e.target.value })
					}
				/>
				<label htmlFor='lastName'>lastname</label>
				<input
					type='text'
					value={user.lastName}
					onChange={(e) =>
						setUser({ ...user, lastName: e.target.value })
					}
				/>
				<label htmlFor='balance'>balance</label>
				<input
					type='text'
					value={user.balance}
					onChange={(e) =>
						setUser({ ...user, balance: e.target.value })
					}
				/>
				<button className='button' type='submit'>
					Create Account
				</button>
			</form>

			<p>{user.firstName}</p>
			<p>{user.lastName}</p>
		</div>
	);
}

export default CreateAccount;
