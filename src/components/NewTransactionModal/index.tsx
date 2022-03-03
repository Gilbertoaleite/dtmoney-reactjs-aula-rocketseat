import ReactModal from 'react-modal';
import incomeImg from '../../assets/img/income.svg';
import outcomeImg from '../../assets/img/outcome.svg';
import closeImg from '../../assets/img/close.svg';
import { Container, RadioBox, TransactionContainer } from './styles';
import { useState } from 'react';

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}
export function Modal({ isOpen, onRequestClose }: ModalProps) {
	const [type, setType] = useState('deposit')

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName='react-modal-overlay'
			className='react-modal-content'
		>
			<Container>
				<button className='close' type='button'>
					<img src={closeImg} onClick={onRequestClose} alt='Fechar modal' />
				</button>
				<h2>Cadastrar transação</h2>

				<input placeholder='Título' type='text' />

				<input placeholder='Preço' type='number' />

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

				<input placeholder='Categoria' type='text' />

				<button type='submit'>Cadastrar</button>
			</Container>
		</ReactModal>
	);
}