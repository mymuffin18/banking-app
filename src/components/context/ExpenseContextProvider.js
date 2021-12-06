import React, { createContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ExpenseContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				{
					id: uuidv4(),
					user_id: action.id,
					text: action.expense.text,
					date: action.expense.date,
					amount: action.expense.amount,
				},
			];
		// case 'EDIT_EXPENSE':
		// 	return state.map((expense) => {
		// 		return expense.id === action.id ? action.payload : expense;
		// 	});

		case 'DELETE_EXPENSE':
			return state.filter((expense) => expense.id !== action.id);
		default:
			return [];
	}
};

function ExpenseContextProvider(props) {
	const [expenses, dispatch] = useReducer(reducer, [], () => {
		const data = localStorage.getItem('expenses');

		return data ? JSON.parse(data) : [];
	});

	useEffect(() => {
		localStorage.setItem('expenses', JSON.stringify(expenses));
	}, [expenses]);
	return (
		<ExpenseContext.Provider value={{ expenses, dispatch }}>
			{props.children}
		</ExpenseContext.Provider>
	);
}

export default ExpenseContextProvider;
