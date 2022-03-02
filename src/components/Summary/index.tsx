/** @format */

import incomeImg from '../../assets/img/income.svg';
import outcomeImg from '../../assets/img/outcome.svg';
import totalImg from '../../assets/img/total.svg';
import { Container } from './styles';

export function Summary() {
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt='' />
				</header>
				<strong>R$16.000,00</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt='' />
				</header>
				<strong> - R$5.000,00</strong>
			</div>
			<div className='highlight-background'>
				<header>
					<p>Total</p>
					<img src={totalImg} alt='' />
				</header>
				<strong>R$11.000,00</strong>
			</div>
		</Container>
	);
}
