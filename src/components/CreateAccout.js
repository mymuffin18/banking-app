import React, { useState, useContext } from 'react';
import { UserContext } from './context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
function CreateAccout() {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		balance: 0,
	});
	const { dispatch } = useContext(UserContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD_USER', user: user });

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
				<input
					type='text'
					value={user.firstName}
					onChange={(e) =>
						setUser({ ...user, firstName: e.target.value })
					}
				/>
				<input
					type='text'
					value={user.lastName}
					onChange={(e) =>
						setUser({ ...user, lastName: e.target.value })
					}
				/>
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

export default CreateAccout;
