import React from 'react';
import CreateAccount from './CreateAccount';
import {useNavigate} from 'react-router-dom'



function Dashboard() {
	const navigate = useNavigate();
	return (
	<>
	<div>Dashboard</div>

	<table style = {{border: '1px solid'}}>
		<tr style = {{border: '1px solid'}}>
			<th style = {{border: '1px solid'}}>Name</th>
			<th>Balance</th>
		</tr>
		<tr style = {{border: '1px solid'}}>
			<td style = {{border: '1px solid'}}>User 1</td>
			<td>Balance User 1</td>
		</tr>
		<tr style = {{border: '1px solid'}}>
			<td style = {{border: '1px solid'}}>User 2</td>
			<td>Balance User 2</td>
		</tr>
		<tr style = {{border: '1px solid'}}>
			<td style = {{border: '1px solid'}}>User 3</td>
			<td>Balance User 3</td>
		</tr>
	</table>

	<button onClick={()=>{navigate('/create')}}>Create Account</button>
	<br />
	<br />
	
	<table style = {{border: '1px solid'}}>
		<tr style = {{border: '1px solid'}}>
			<th style = {{border: '1px solid'}}>Name</th>
			<th>Balance</th>
		</tr>
		<tr style = {{border: '1px solid'}}>
			<td style = {{border: '1px solid'}}>User 1</td>
			<td>Balance User 1</td>
		</tr>		
	</table>

	<button>Deposit</button>
	<button>Widthraw</button>
	<button>Transfer</button>
	</>
	)
}

export default Dashboard;
