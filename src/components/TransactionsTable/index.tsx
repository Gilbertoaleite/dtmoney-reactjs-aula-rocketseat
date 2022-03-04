// import { create } from "domain";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
// import {createServer} from "miragejs";

interface Transaction {
	id: 0;
	title: '';
	type: '';
	category: '';
	amount: 0;
	createdAt: '';
}

export function TransactionsTable() {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('transactions')
			.then(response => setTransactions(response.data.transactions))

		// fetch('http://localhost:3000/api/transactions').then(response => response.json())
		// 	.then(data => console.log(data))
	}, []);

   return (
			<Container >
				<table>
					<thead>
						<tr>
							<th>Titulo</th>
							<th>Valor</th>
							<th>Categoria</th>
							<th>Data</th>
						</tr>
					</thead>
					<tbody>
						{transactions.map(transaction => (
							<tr key={transaction.id}>
								<td>{transaction.title}</td>
								<td className={transaction.type}>
								{new Intl.NumberFormat('pt-BR', {
									style: 'currency',
									currency: 'BRL'
								}).format(transaction.amount)}
								</td>
								<td>{transaction.category}</td>
								<td>
									{new Intl.DateTimeFormat('pt-BR').format(
										new Date(transaction.createdAt)
									)}
								</td>	
							</tr>
						))}
					</tbody>
				</table>
			</Container>
		);
}


		/* <tr>
							<td>Aluguel</td>
							<td className='withdraw'>-2.000</td>
							<td>Casa</td>
							<td>28/02/2022</td>
						</tr> */
	