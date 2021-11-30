import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from './context/UserContextProvider';
import UserList from './UsersList';

function Dashboard() {
	const navigate = useNavigate();
	const { users } = useContext(UserContext);
	console.log(users);
	return (
		<div className='h-screen'>
			<div>Dashboard</div>

			<button>Deposit</button>
			<button>Widthraw</button>
			<button>Transfer</button>
			<button
				onClick={() => {
					navigate('/create');
				}}
			>
				Create Account
			</button>

			<UserList />
		</div>
	);
}

export default Dashboard;
