import React, {useState} from 'react';

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
	<form>
	<h1>Login form</h1>

	<input type="text" value={account.userName} onChange={e => setAccount({...account, userName:e.target.value})} placeholder="username"/>
	<input type="text" value={account.password} onChange={e => setAccount({...account, password:e.target.value})} placeholder="password"/>

	<button onClick={()=> handleLogin()}>Login</button>
	</form>
	)
}

export default LoginForm;
