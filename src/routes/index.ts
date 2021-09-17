import express from 'express';
import { PizzaApi } from './Pizza.route';
import { UserApi } from './User.route';
import { OrderApi } from './Order.route';
class MainRouter {
	router: express.Router;
	constructor() {
		this.router = express.Router();
		this.routes();
	}
	routes() {
		this.router.use('/pizza', PizzaApi);
		this.router.use('/user', UserApi);
		this.router.use('/order', OrderApi);
	}
}

export const MainApi = new MainRouter().router;
