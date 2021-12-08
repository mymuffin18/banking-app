import React, { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const TransactionContext = createContext();

const initialState = {
	deposit: [],
	withdraw: [],
	transfer: [],
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'DEPOSIT_TRANSACTION':
			return {
				...state,
				deposit: [
					...state.deposit,
					{
						id: uuidv4(),
						user_id: action.id,
						date: new Date().toISOString().slice(0, 10),
						amount: action.amount,
					},
				],
			};
		case 'WITHDRAW_TRANSACTION':
			return {
				...state,
				withdraw: [
					...state.withdraw,
					{
						id: uuidv4(),
						user_id: action.id,
						date: new Date().toISOString().slice(0, 10),
						amount: action.amount,
					},
				],
			};
		case 'TRANSFER_TRANSACTION':
			return {
				...state,
				transfer: [
					...state.transfer,
					{
						id: uuidv4(),
						user_id: action.id,
						transfer_to: action.user,
						date: new Date().toISOString().slice(0, 10),
						amount: action.amount,
					},
				],
			};
		default:
			return initialState;
	}
};
function TransactionContextProvider(props) {
	const [transactions, dispatch] = useReducer(reducer, initialState, () => {
		const data = localStorage.getItem('transactions');

		return data ? JSON.parse(data) : initialState;
	});

	useEffect(() => {
		localStorage.setItem('transactions', JSON.stringify(transactions));
	}, [transactions]);
	return (
		<TransactionContext.Provider value={{ transactions, dispatch }}>
			{props.children}
		</TransactionContext.Provider>
	);
}

export default TransactionContextProvider;
