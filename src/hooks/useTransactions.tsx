import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


interface Transaction {
	id: 0;
	title: string;
	type: string;
	category: string;
	amount: number;
	createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// interface TransactionInput {
// 	title: '';
// 	amount: 0;
// 	type: '';
// 	category: '';
// }

interface TransactionsProviderProps {
   children: ReactNode;
}

interface TransactionsContextData{
   transactions: Transaction[];
   createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
   {} as TransactionsContextData
);

//  usado para remover erro de tipagem: as TransactionsContextData

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('transactions')
			.then(response => setTransactions(response.data.transactions));
   }, []);
   

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post('/transactions',{
			...transactionInput,
			createdAt: new Date(),
	})
		const { transaction } = response.data;

		setTransactions([
			...transactions,
			transaction,
		]);
		
		
	}


	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);

}
export function useTransactions() {
	const context = useContext(TransactionsContext);

	return context;
}




