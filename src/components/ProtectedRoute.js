import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContextProvider';
function ProtectedRoute(props) {
	const { state } = useAuth();
	console.log(state);
	if (state.auth !== 'admin') {
		return <Navigate to='/' />;
	}
	return props.children;
}

export default ProtectedRoute;
