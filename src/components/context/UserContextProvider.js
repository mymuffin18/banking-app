import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const UserContext = createContext();

const userReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_USER':
			return [
				...state,
				{
					id: uuidv4(),
					firstName: action.user.firstName,
					lastName: action.user.lastName,
					balance: action.user.balance,
				},
			];

		case 'DEPOSIT':
			return state.map((user) => {
				return user.id === action.id
					? {
							id: user.id,
							firstName: user.firstName,
							lastName: user.lastName,
							balance: (user.balance += action.deposit),
					  }
					: user;
			});

		case 'WITHDRAW':
			// working
			return state.map((user) => {
				return user.id === action.id
					? {
							id: user.id,
							firstName: user.firstName,
							lastName: user.lastName,
							balance: (user.balance -= action.amount),
					  }
					: user;
			});

		case 'TRANSFER':
			return state.map((user) => {
				if (user.id === action.senderId) {
					return {
						id: user.id,
						firstName: user.firstName,
						lastName: user.lastName,
						balance: (user.balance -= action.amount),
					};
				}
				if (user.id === action.receiverId) {
					return {
						id: user.id,
						firstName: user.firstName,
						lastName: user.lastName,
						balance: (user.balance += action.amount),
					};
				}
				return user;
			});
		default:
			return [];
	}
};
function UserContextProvider(props) {
	const [users, dispatch] = useReducer(userReducer, [], () => {
		const data = localStorage.getItem('users');

		return data ? JSON.parse(data) : [];
	});

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, [users]);
	return (
		<UserContext.Provider value={{ users, dispatch }}>
			{props.children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
