import React, { useContext } from 'react';
import { UserContext } from './context/UserContextProvider';

function InfoContainer({ id }) {
	const { users } = useContext(UserContext);
	const user = users.find((user) => user.id === id);
	return (
		<div>
			{user && (
				<div className='flex flex-col gap-1 p-5'>
					<div className='mt-2'>
						<p className='text-lg'>
							Account id:{' '}
							<span className='font-bold'>{user.id}</span>
						</p>
					</div>
					<div>
						<p className='text-lg'>
							Name:{' '}
							<span className='font-bold'>
								{user.firstName} {user.lastName}
							</span>
						</p>
					</div>
					<div>
						<p className='text-lg'>
							Balance:{' '}
							<span className='font-bold'>
								{user.balance}
							</span>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default InfoContainer;
