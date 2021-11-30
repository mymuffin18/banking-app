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
			return [
				...state,
				state.map((user) => {
					const newAmount = user.balance + action.deposit;
					return user.id === action.id
						? { ...state, balance: newAmount }
						: user;
				}),
			];

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
