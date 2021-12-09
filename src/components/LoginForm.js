import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContextProvider';
import { UserContext } from './context/UserContextProvider';
function LoginForm({ handleClick }) {
	const [account, setAccount] = useState({ userName: '', password: '' });
	const validation = {
		userName: 'admin',
		password: 'password',
	};

	const { dispatch } = useAuth();
	const { users } = useContext(UserContext);
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();

		const user = users.find((user) => {
			if (
				user.username === account.userName &&
				user.password === account.password
			) {
				return user;
			}
			return null;
		});

		if (
			account.userName === validation.userName &&
			account.password === validation.password
		) {
			dispatch({ type: 'LOGIN_ADMIN' });
			navigate('/dashboard');
		} else if (user) {
			dispatch({ type: 'LOGIN_USER', id: user.id });
			navigate('/user');
		} else {
			alert('User not found');
		}
	};

	return (
		<div className='flex items-center justify-center h-screen'>
			<form className='lg:w-auto lg:h-auto p-5 rounded-xl modalCard modalContainer w-auto xl:w-auto'>
				<h1 className='text-purple-600 text-7xl mb-20 dark:text-pink-600'>
					Cashy++
				</h1>

				<div className='mb-6'>
					<input
						className='shadow appearance-none border rounded w-full py-2 px-3 text-purple-600 leading-tight dark:text-pink-600 focus:outline-none focus:shadow-outline'
						type='text'
						value={account.userName}
						onChange={(e) =>
							setAccount({
								...account,
								userName: e.target.value,
							})
						}
						placeholder='username'
					/>
				</div>

				<div className='mb-6'>
					<input
						className='shadow appearance-none border border-purple-600 rounded w-full py-2 px-3 text-purple-600 dark:text-pink-600 dark:border-pink-600 leading-tight focus:outline-none focus:shadow-outline'
						type='password'
						value={account.password}
						onChange={(e) =>
							setAccount({
								...account,
								password: e.target.value,
							})
						}
						placeholder='password'
					/>
				</div>

				<div className='flex items-center justify-center mt-24 mb-6'>
					<button
						className='btn-gradient focus:outline-none focus:shadow-outline text-xl px-20 dark:bg-gradient-pink dark:hover:bg-pink-500'
						onClick={(e) => handleLogin(e)}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
