import React, { useReducer, createContext, useContext, useEffect } from 'react';

const initialState = {
	isAuth: false,
};

const authReducer = (state, action) => {
	switch (action) {
		case 'LOGIN': {
			return true;
		}
		case 'LOGOUT':
			return false;
		default:
			return initialState;
	}
};

const AuthContext = createContext();
export function AuthContextProvider(props) {
	const [state, dispatch] = useReducer(authReducer, initialState, () => {
		const data = localStorage.getItem('login');

		return data ? JSON.parse(data) : false;
	});

	useEffect(() => {
		localStorage.setItem('login', JSON.stringify(state));
	}, [state]);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(AuthContext);
};
