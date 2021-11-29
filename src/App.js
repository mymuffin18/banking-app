import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';


function App() {
	return (
		<div className = "flex items-center justify-center my-80">
		{/* <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center justify-center space-x-4 mt-5'> */}
			<LoginForm />
		{/* </div> */}
		</div>
	);
}

export default App;
