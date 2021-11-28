import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContextProvider';
function LoginForm({ handleClick }) {
	const [account, setAccount] = useState({ userName: '', password: '' });
	const validation = {
		userName: 'admin',
		password: 'password',
	};

	const { dispatch } = useAuth();

	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();

		if (
			account.userName === validation.userName &&
			account.password === validation.password
		) {
			dispatch('LOGIN');
			navigate('/dashboard', { replace: true });
		} else {
			console.log('not matched');
		}
	};

	return (
		<form>
			<h1>Login form</h1>

			<input
				type='text'
				value={account.userName}
				onChange={(e) =>
					setAccount({ ...account, userName: e.target.value })
				}
				placeholder='username'
			/>
			<input
				type='text'
				value={account.password}
				onChange={(e) =>
					setAccount({ ...account, password: e.target.value })
				}
				placeholder='password'
			/>

			<button onClick={(e) => handleLogin(e)}>Login</button>
		</form>
	);
}

export default LoginForm;
