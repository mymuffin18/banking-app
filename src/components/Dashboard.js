import React, {useState} from 'react';
import CreateAccount from './CreateAccount';
import {useNavigate} from 'react-router-dom'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import TransferModal from './TransferModal';



function Dashboard() {
	const navigate = useNavigate();
	const [openDepositModal, setOpenDepositModal] = useState(false)
	const [openWithdrawModal, setOpenWithdrawModal] = useState(false)
	const [openTransferModal, setOpenTransferModal] = useState(false)

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

	<button onClick={()=>{setOpenDepositModal(true)}}>Deposit</button>
	{openDepositModal && <DepositModal closeDepositModal={setOpenDepositModal}/>}

	<button onClick={()=> {setOpenWithdrawModal(true)}}>Widthraw</button>
	{openWithdrawModal && <WithdrawModal closeWithdrawModal={setOpenWithdrawModal}/>}

	<button onClick={()=>{setOpenTransferModal(true)}}>Transfer</button>
	{openTransferModal && <TransferModal closeTransferModal={setOpenTransferModal}/>}
	</>
	)
}

export default Dashboard;
