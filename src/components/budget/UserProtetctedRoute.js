import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContextProvider';

function UserProtetctedRoute(props) {
	const { state } = useAuth();
	if (state.auth !== 'user') {
		return <Navigate to='/' />;
	}
	return props.children;
}

export default UserProtetctedRoute;
