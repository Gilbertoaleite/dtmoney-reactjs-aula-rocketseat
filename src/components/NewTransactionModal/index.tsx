import ReactModal from 'react-modal';


import incomeImg from '../../assets/img/income.svg';
import outcomeImg from '../../assets/img/outcome.svg';
import closeImg from '../../assets/img/close.svg';
import { Container, RadioBox, TransactionContainer } from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
	ariaHideApp: boolean;
	
}
export function Modal({ isOpen, onRequestClose }: ModalProps) {
	
	const [title, setTitle] = useState('');
	const [value, setValue] = useState(0);
	const [category, setCategory] = useState('');
	const [type, setType] = useState('deposit');

	function handleCreateNewTransaction(event: FormEvent) {
		event.preventDefault();

		const data = {
			title,
			value,
			category,
			type
		};

		api.post('/transactions', data)
		
		
	}

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			ariaHideApp={false}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<Container onSubmit={handleCreateNewTransaction}>
				<button className='close' type='button'>
					<img src={closeImg} onClick={onRequestClose} alt='Fechar modal' />
				</button>
				<h2>Cadastrar transação</h2>

				<input
					placeholder='Título'
					type='text'
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>

				<input
					placeholder='Preço'
					// type='number'
					value={value}
					onChange={(event) => setValue(Number(event.target.value))}
				/>

				<TransactionContainer>
					<RadioBox
						type='button'
						onClick={() => {
							setType('deposit');
						}}
						isActive={type === 'deposit'}
						activeColor='green'
					>
						<img src={incomeImg} alt='Entrada' />
						<span>Entrada</span>
					</RadioBox>

					<RadioBox
						type='button'
						onClick={() => {
							setType('withdraw');
						}}
						isActive={type === 'withdraw'}
						activeColor='red'
					>
						<img src={outcomeImg} alt='Saida' />
						<span>Saida</span>
					</RadioBox>
				</TransactionContainer>

				<input
					placeholder='Categoria'
					type='text'
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>

				<button type='submit'>Cadastrar</button>
			</Container>
		</ReactModal>
	);
}