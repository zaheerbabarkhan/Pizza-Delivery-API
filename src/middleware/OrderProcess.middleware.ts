import { PIZZASchema } from '../model/Pizzas.model';

interface Data {
	_id: string;
	DollarPrice: string;
	DollarDelivery: string;
}
interface EuroData {
	_id: string;
	EuroPrice: string;
	EuroDelivery: string;
}
export const orderProcess = async (order: any) => {
	let totalBill = 0;
	let deliveryPrice = 0;
	if (order.Currency === '$') {
		for (const key in order.Pizza) {
			if (Object.prototype.hasOwnProperty.call(order.Pizza, key)) {
				const element = order.Pizza[key];

				let data: Data = <any>(
					await PIZZASchema.findById(element.Pizza).select(
						'DollarPrice DollarDelivery'
					)
				);

				const price = <number>(<any>data.DollarPrice) * element.Quantity;
				totalBill += price;
				deliveryPrice = <number>(<any>data.DollarDelivery) * element.Quantity;
			}
		}
	} else {
		for (const key in order.Pizza) {
			if (Object.prototype.hasOwnProperty.call(order.Pizza, key)) {
				const element = order.Pizza[key];
				let data: EuroData = <any>(
					await PIZZASchema.findById(element.Pizza).select(
						'EuroPrice EuroDelivery'
					)
				);
				const price = <number>(<any>data.EuroPrice) * element.Quantity;
				totalBill += price;
				deliveryPrice = <number>(<any>data.EuroDelivery) * element.Quantity;
			}
		}
	}
	order.bill = totalBill;
	order.DeliveryCost = deliveryPrice;
	order.TotalBill = totalBill + deliveryPrice;
	return order;
};
