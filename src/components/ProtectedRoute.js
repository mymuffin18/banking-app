import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuth, ...props }) {
	if (!isAuth) {
		return <Navigate to='/login' />;
	}
	return props.children;
}

export default ProtectedRoute;
