import { USER } from '../Document/User.document';
import { PizzaInterface } from '../Pizza.interface';
export interface SaveReqOrder {
	Pizza: PizzaInterface[];
	User: string;
	Currency?: string;
}

export interface UpdateReqOrder {
	Pizza: PizzaInterface[];
	User: string;
	Bill: number;
	DeliveryCost: number;
	TotalBill: number;
}

export interface DeleteReqOrder {
	id: string;
}
export interface GetreqOrder {
	id: string;
}

export interface GetOrderList {
	id: string;
}

export interface IOrderGetRequest {}
