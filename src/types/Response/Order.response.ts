import { PIZZAS } from '../Document/Pizzas.document';
import { PizzaInterface } from '../Pizza.interface';

export interface SaveUpdateResOrder {
	_id: string;
	Pizza: PizzaInterface[];
	User: string;
	Bill: number;
	DeliveryCost: number;
	TotalBill: number;
}
