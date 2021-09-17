import { Document } from 'mongoose';
import { PIZZAS } from './Pizzas.document';
import { USER } from './User.document';
import { PizzaInterface } from '../Pizza.interface';
export interface ORDER extends Document {
	_id: string;
	Pizza: PizzaInterface[];
	User: string;
	Bill: number;
	DeliveryCost: number;
	TotalBill: number;
}
