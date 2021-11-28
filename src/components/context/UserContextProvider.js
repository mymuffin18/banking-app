import React, { createContext, useReducer, useEffect } from 'react';

const UserContext = createContext();

const bookReducer = (state, action) => {
	switch (action) {
		default:
			return [];
	}
};
function UserContextProvider(props) {
	const [users, dispatch] = useReducer(bookReducer, [], () => {
		const data = localStorage.getItem('users');

		return data ? data : [];
	});

	useEffect(() => {
		localStorage.setItem('users', users);
	}, [users]);
	return (
		<UserContext.Provider value={{ users, dispatch }}>
			{props.children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
