import { connect, connection } from 'mongoose';
export class DbMongo {
	constructor() {}
	connect(
		host: string,
		dbName: string,
		userName?: string,
		password?: string,
		port?: number
	) {
		let connectionUri = `mongodb://${host}:${port}/${dbName}`;
		if (userName && password) {
			connectionUri = `mongodb+srv://${userName}:${password}@${host}/${dbName}`;
		}
		connect(connectionUri, (err) => {
			if (err) {
				console.log(err);
				console.log('Database Not connected');
			} else {
				console.log('Databse Connected');
			}
		});
	}
}

export const MonStatConnection = connection.readyState;
