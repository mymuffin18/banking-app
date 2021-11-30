import React from 'react';

import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './components/context/AuthContextProvider';
import CreateAccout from './components/CreateAccout';
import UserContextProvider from './components/context/UserContextProvider';

function App() {
	const { state } = useAuth();

	return (
		<>
			<UserContextProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path='/'
							element={
								state ? (
									<Navigate replace to='dashboard' />
								) : (
									<LoginForm />
								)
							}
						/>
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
									<CreateAccout />
								</ProtectedRoute>
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
