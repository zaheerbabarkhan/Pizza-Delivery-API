import { Schema, model } from 'mongoose';
import { ORDER } from '../types/Document/Order.document';
const OrderSchema = new Schema({
	Pizza: [
		{
			Pizza: {
				type: Schema.Types.ObjectId,
				ref: 'Pizza',
			},
			Quantity: {
				type: Number,
			},
		},
	],
	User: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	Bill: {
		type: Number,
	},
	DeliveryCost: {
		type: Number,
	},
	TotalBill: {
		type: Number,
	},
});

export const ORDERSchema = model<ORDER>('Order', OrderSchema);
