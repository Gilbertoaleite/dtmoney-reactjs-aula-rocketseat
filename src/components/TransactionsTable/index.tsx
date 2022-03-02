import { Container } from "./styles";

export function TransactionsTable(){
   return (
			<Container>
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
						<tr>
							<td>Desenvolvimento de website</td>
							<td className="pix">15.000</td>
							<td>Desenvolvimento</td>
							<td>26/02/2022</td>
						</tr>
						<tr>
							<td>Desenvolvimento de website</td>
							<td className="pix">15.000</td>
							<td>Desenvolvimento</td>
							<td>26/02/2022</td>
						</tr>
						<tr>
							<td>Contas de consumo</td>
							<td className='withdraw'>-1.000</td>
							<td>Agua e luz</td>
							<td>02/03/2022</td>
						</tr>
						<tr>
							<td>Aluguel</td>
							<td className='withdraw'>-2.000</td>
							<td>Casa</td>
							<td>28/02/2022</td>
						</tr>
					</tbody>
				</table>
			</Container>
		);
}