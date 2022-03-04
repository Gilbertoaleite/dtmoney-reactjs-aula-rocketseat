/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Desenvolvimento site',
					type: 'deposit',
					category: 'Dev',
					amount: 7000,
					createdAt: new Date('2022-02-02 08:55:00'),
				},
				{
					id: 2,
					title: 'Pizza',
					type: 'withdraw',
					category: 'Food',
					amount: 70,
					createdAt: new Date('2022-03-03 12:50:00'),
				},
			],
		});
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');

			// return [
			//   {
			//     id: 1,
			//     title: 450,
			//     type: 'deposit',
			//     category: 'food',

			//   }
			// ]
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create('transaction', data);
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
