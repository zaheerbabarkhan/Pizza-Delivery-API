import { PIZZASchema } from '../model/Pizzas.model';
import { PIZZAS } from '../types/Document/Pizzas.document';

export class MianPizza {
	constructor() {}
	savePizza(Pizza: PIZZAS) {
		return new PIZZASchema(Pizza).save();
	}

	getPizzaList() {
		return PIZZASchema.find();
	}
}
