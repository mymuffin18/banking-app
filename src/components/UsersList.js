import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './context/UserContextProvider';
import User from './User';

function UserList({ clickHandler }) {
	const { users } = useContext(UserContext);
	const [selected, setSelected] = useState(false);
	const [search, setSearch] = useState('');
	const [filteredNames, setFilteredNames] = useState([users]);

	const handleClickOnDiv = (id) => {
		setSelected(id !== selected ? id : '');
		console.log(id);
	};

	const onSearch = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		if (search === '') {
			setFilteredNames(users);
		} else {
			setFilteredNames(
				users.filter((user) => {
					return user.lastName
						.toLowerCase()
						.includes(search.toLowerCase());
				})
			);
		}
	}, [search, users]);

	return (
		<div className='flex justify-center'>
			<div className='w-4/5 mt-5 md:mt-10 lg:mt-20 xl:mt-20 2xl:mt-20 lg:mb-20 max-h-48 md:max-h-96 lg:max-h-96 modalCard modalContainer overflow-scroll overflow-x-hidden'>
				<h1 className='text-center dark:text-pink-600'>
					Users list
				</h1>
				<div className='flex justify-center mb-6'>
					<input
						type='text'
						name='search'
						placeholder='search last name'
						onChange={onSearch}
					/>
				</div>
				<div className='flex flex-row justify-center'>
					<div className='border border-solid border-indigo-700 w-1/3 dark:border-pink-700'>
						<p className='font-semibold text-center dark:text-pink-600'>
							Account id
						</p>
					</div>
					<div className='border border-solid border-indigo-700 w-1/6 dark:border-pink-700'>
						<p className='font-semibold text-center dark:text-pink-600'>
							Name
						</p>
					</div>
					<div className='border border-solid border-indigo-700 w-1/6 dark:border-pink-700'>
						<p className='font-semibold text-center dark:text-pink-600'>
							Last name
						</p>
					</div>
					<div className='border border-solid border-indigo-700 w-1/6 dark:border-pink-700'>
						<p className='font-semibold text-center dark:text-pink-600'>
							Balance
						</p>
					</div>
				</div>
				{filteredNames.map((user) => {
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
