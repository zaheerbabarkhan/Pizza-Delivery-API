import express from 'express';
import { PizzaController } from '../controller/Pizzas.controller';
import { SaveReqPizza } from '../types/Request/Pizzas.request';
import { SaveResPizzas } from '../types/Response/Pizzas.response';
export class PizzaRoutes {
	router: express.Router;
	constructor() {
		this.router = express.Router();
		this.routes();
	}
	routes() {
		this.router.post('/savePizza', async (req, res, next) => {
			try {
				const saveReq: SaveReqPizza = req.body;
				const savedPizza: SaveResPizzas = await new PizzaController().savePizza(
					saveReq
				);
				res.send(savedPizza);
			} catch (error) {
				next(error);
			}
		});
	}
}

export const PizzaApi = new PizzaRoutes().router;
