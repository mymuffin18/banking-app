import React from 'react';

import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './components/context/AuthContextProvider';
import CreateAccount from './components/CreateAccount';
import UserContextProvider from './components/context/UserContextProvider';
import UserProtetctedRoute from './components/budget/UserProtetctedRoute';
import UserDashboard from './components/budget/UserDashboard';

function App() {
	const { state } = useAuth();

	let redirectRoute;
	if (state.auth === 'admin') {
		redirectRoute = <Navigate replace to='dashboard' />;
	} else if (state.auth === 'user') {
		redirectRoute = <Navigate replace to='user' />;
	} else {
		redirectRoute = <LoginForm />;
	}

	return (
		<>
			<UserContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={redirectRoute} />
						<Route
							path='dashboard'
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route
							path='create'
							element={
								<ProtectedRoute>
									<CreateAccount />
								</ProtectedRoute>
							}
						/>
						<Route
							path='user'
							element={
								<UserProtetctedRoute>
									<UserDashboard />
								</UserProtetctedRoute>
							}
						/>

						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</BrowserRouter>
			</UserContextProvider>
		</>
	);
}

export default App;
