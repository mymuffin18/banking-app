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
			<div className='w-4/5 mt-5 md:mt-10 lg:mt-20 xl:mt-20 2xl:mt-20 lg:mb-20 max-h-48 md:max-h-96 lg:max-h-96 modalCard modalContainer overflow-scroll overflow-x-hidden'>
				<h1 className='text-center dark:text-pink-600'>
					Users list
				</h1>
				<div className='flex flex-row justify-center'>
					<div className='border border-solid border-indigo-700 w-1/3'>
						<p className='font-semibold text-center dark:text-pink-600'>
							Account id
						</p>
					</div>
					<div className='border border-solid border-indigo-700 w-1/6'>
						<p className='font-semibold text-center dark:text-pink-600'>
							Name
						</p>
					</div>
					<div className='border border-solid border-indigo-700 w-1/6'>
						<p className='font-semibold text-center dark:text-pink-600'>
							Last name
						</p>
					</div>
					<div className='border border-solid border-indigo-700 w-1/6'>
						<p className='font-semibold text-center dark:text-pink-600'>
							Balance
						</p>
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
