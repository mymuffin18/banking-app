import React, { useContext, useState } from 'react';
import { UserContext } from './context/UserContextProvider';
import User from './User';

function UserList({ clickHandler }) {
	const { users } = useContext(UserContext);
	const [selected, setSelected] = useState(false);

	const handleClickOnDiv = (id) => {
		setSelected(id !== selected ? id : '');
		console.log(id);
	};

	return (
		<div className='flex justify-center'>
			{/* <div className="w-11/12 flex justify-center bg-blue-100 mt-20  "> */}
			<div className='w-4/5 mt-20 mb-20 h-80 card glass overflow-scroll overflow-x-hidden'>
				<h1 className='text-center'>Users list</h1>
				<div className='flex flex-row justify-center'>
					<div className='text-base font-semibold border-2 border-solid border-black w-1/3 text-center'>
						Account id
					</div>
					<div className='text-base font-semibold border-2 border-solid border-black w-1/6 text-center'>
						First name
					</div>
					<div className='text-base font-semibold border-2 border-solid border-black w-1/6 text-center'>
						Last name
					</div>
					<div className='text-base font-semibold border-2 border-solid border-black w-1/6 text-center'>
						Balance
					</div>
				</div>
				{users.map((user) => {
					return (
						<User
							key={user.id}
							onClick={clickHandler}
							onSelect={handleClickOnDiv}
							id={user.id}
							selected={selected}
							firstname={user.firstName}
							lastname={user.lastName}
							balance={user.balance}
						/>
					);
				})}
			</div>
		</div>
		// </div>
	);
}

export default UserList;
