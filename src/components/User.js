import React from 'react';

function User(props) {
	return (
		<div
			className='flex justify-around bg-blue-200'
			onClick={() => props.onClick(props.id)}
		>
			<h4 className='font-semibold'>{props.id}</h4>
			<h4 className='font-semibold'>{props.firstname}</h4>
			<h4 className='font-semibold'>{props.lastname}</h4>
			<h4 className='font-semibold'>{props.balance}</h4>
		</div>
	);
}

export default User;
