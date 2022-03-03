import ReactModal from 'react-modal';
import incomeImg from '../../assets/img/income.svg';
import outcomeImg from '../../assets/img/outcome.svg';
import closeImg from '../../assets/img/close.svg';
import { Container, TransactionContainer } from './styles';

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}
export function Modal({isOpen, onRequestClose}: ModalProps) {
   
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
					<button type='button'>
						<img src={incomeImg} alt='Entrada' />
						<span>Entrada</span>
					</button>

					<button type='button'>
						<img src={outcomeImg} alt='Saida' />
						<span>Saida</span>
					</button>
				</TransactionContainer>

				<input placeholder='Categoria' type='text' />

				<button type='submit'>Cadastrar</button>
			</Container>
		</ReactModal>
	);
}