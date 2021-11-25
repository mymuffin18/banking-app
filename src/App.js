import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';


function App() {
	return (
		<div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-5 bg-green-400'>
			<LoginForm />
			{/* <Validation /> */}
		</div>
	);
}

export default App;
