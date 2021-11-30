import React, { useState } from 'react';

function LoginForm() {

	const [account, setAccount] = useState({userName: '', password: ''})
	const validation = {
		userName: 'admin', password: 'password'
	}

	const handleLogin =() => {

		if ((account.userName === validation.userName) && (account.password === validation.password)) {
			console.log('successful')
		}else{
			console.log('not matched')
		}
		// console.log(`username: ${account.userName}, password: ${account.password}`)
		// alert(`username: ${account.userName}, password: ${account.password}`)
	}

	return (
	<>
	{/* <div className="flex flex-col justify-center align-center w-auto p-5 mx-5"> */}
	{/* <h1 className="p-20">Cashy Banking App</h1> */}
	<form className="w-1/5 p-5 rounded-xl bg-gradient glass card">
	{/* <h1 className="text-center">Login form</h1> */}
	<div class="mb-4">
	<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={account.userName} onChange={e => setAccount({...account, userName:e.target.value})} placeholder="username"/>
	</div>
	<div class="mb-6">
	<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" value={account.password} onChange={e => setAccount({...account, password:e.target.value})} placeholder="password"/>
	</div>
	<div className="flex items-center justify-between">
		<button className="btn-blue focus:outline-none focus:shadow-outline" onClick={()=> handleLogin()}>Login</button>
		<a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
	</div>
	</form>
	{/* </div> */}
	</>
	)
}

export default LoginForm;
