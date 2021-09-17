import { orderProcess } from '../middleware/OrderProcess.middleware';
import { ORDERSchema } from '../model/Order.model';
import { ORDER } from '../types/Document/Order.document';

export class MainOrder {
	async saveOrder(Order: ORDER) {
		const updatedOrder = await orderProcess(Order);
		console.log(updatedOrder);
		const data = new ORDERSchema(updatedOrder).save();
		return data;
	}

	updateOrder(Order: ORDER) {
		return ORDERSchema.findByIdAndUpdate(Order._id, Order, {
			new: true,
		});
	}
	getOrder(_id: string) {
		return ORDERSchema.findById(_id);
	}
	deleteOrder(_id: string) {
		return ORDERSchema.findByIdAndDelete(_id);
	}
	getOrderList(_id: string) {
		return ORDERSchema.find({ User: _id });
	}
}
