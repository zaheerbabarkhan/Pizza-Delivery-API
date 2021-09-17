import { Schema, model } from 'mongoose';
import { PIZZAS } from '../types/Document/Pizzas.document';
const PizaasSchema = new Schema({
	Name: {
		type: String,
	},
	DollarPrice: {
		type: Number,
	},
	EuroPrice: {
		type: Number,
	},
	DollarDelivery: {
		type: Number,
	},
	EuroDelivery: {
		type: Number,
	},
});

export const PIZZASchema = model<PIZZAS>('Pizza', PizaasSchema);
