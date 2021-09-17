import { Document } from 'mongoose';

export interface PIZZAS extends Document {
	_id: string;
	Name: string;
	DollarPrice: number;
	EuroPrice: number;
	DollarDelivery: number;
	EuroDelivery: number;
}
