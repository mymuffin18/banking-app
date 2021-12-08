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
					username: action.user.username,
					password: action.user.password,
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
							username: user.username,
							password: user.password,
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
							username: user.username,
							password: user.password,
					  }
					: user;
			});
		case 'CHANGE_PASSWORD':
			return state.map((user) => {
				return user.id === action.id
					? {
							id: user.id,
							firstName: user.firstName,
							lastName: user.lastName,
							balance: user.balance,
							username: user.username,
							password: action.newPassword,
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
						username: user.username,
						password: user.password,
					};
				}
				if (user.id === action.receiverId) {
					return {
						id: user.id,
						firstName: user.firstName,
						lastName: user.lastName,
						balance: (user.balance += action.amount),
						username: user.username,
						password: user.password,
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
