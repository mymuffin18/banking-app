import React from 'react';

import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './components/context/AuthContextProvider';
import CreateAccount from './components/CreateAccount';

function App() {

	const { state } = useAuth();

	const isLoggedin = true;

	return (
		<>
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
								<CreateAccount />
							</ProtectedRoute>
						}
					/>

					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
