import React, { useContext } from 'react';
import { UserContext } from './context/UserContextProvider';
import User from './User';

function UserList() {
	const { users } = useContext(UserContext);

	return (
		<div className='w-full bg-gray-100 mt-2 h-full'>
			<h1 className='text-center'>Users list</h1>
			<div className='flex justify-around'>
				<h4 className='text-base'>Account id</h4>
				<h4 className='text-base'>First name</h4>
				<h4 className='text-base'>Last name</h4>
				<h4 className='text-base'>Balance</h4>
			</div>
			{users.map((user) => {
				return (
					<User
						key={user.id}
						id={user.id}
						firstname={user.firstName}
						lastname={user.lastName}
						balance={user.balance}
					/>
				);
			})}
		</div>
	);
}

export default UserList;
