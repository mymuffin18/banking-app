import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div class='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-5 bg-green-400'>
			<div className='flex-shrink-0'>
				<img src={logo} className='w-25' alt='' />
			</div>
			<div>
				<div class='text-xl font-medium text-black'>
					Avion School
				</div>
				<p class='text-gray-500'>Test</p>
			</div>
		</div>
	);
}

export default App;
