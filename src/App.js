import React from 'react';

import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFoundPage from './components/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
	const isLoggedin = true;
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							isLoggedin ? (
								<Navigate replace to='dashboard' />
							) : (
								<LoginForm />
							)
						}
					/>
					<Route
						path='dashboard'
						element={
							<ProtectedRoute isAuth={isLoggedin}>
								<Dashboard />
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
