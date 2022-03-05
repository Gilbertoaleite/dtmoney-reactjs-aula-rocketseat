
import {  useState } from 'react';
import { Dashboard } from './components/Dashboard';
import {Footer} from './components/Footer';
import { Header } from './components/Header';
import { Modal } from './components/NewTransactionModal';
import {  TransactionsProvider } from './hooks/useTransactions';
// import { api } from './services/api';
import { GlobalStyle } from './styles/global';

// Modal.setAppElement('#root');

export function App() {
const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
	useState(false);
	// const data = useContext(TransactionContext);
	
	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}
   return (
			<TransactionsProvider>
				<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
				<Dashboard />

				<Modal
					isOpen={isNewTransactionModalOpen}
					onRequestClose={handleCloseNewTransactionModal}
					ariaHideApp={false}
				/>
			<GlobalStyle />
			<Footer/>
			</TransactionsProvider>
		);
}

