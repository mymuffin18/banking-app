import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './components/context/AuthContextProvider';
import Circles from './components/Circles';
import ThemeContextProvider from './components/context/ThemeContextProvider';
ReactDOM.render(
	<AuthContextProvider>
		<ThemeContextProvider>
			<Circles>
				<div className='h-screen bg-cover bg-light dark:bg-dark transition-all'>
					<App />
				</div>
			</Circles>
		</ThemeContextProvider>
	</AuthContextProvider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
