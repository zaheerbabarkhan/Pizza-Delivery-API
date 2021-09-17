import { PIZZAS } from '../Document/Pizzas.document';

export interface SaveReqPizza {
	Name: string;
	DollarPrice: number;
	EuroPrice: number;
	DollarDelivery: number;
	EuroDelivery: number;
}
