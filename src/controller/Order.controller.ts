import { MainOrder } from '../repositories/Order.repository';
import { SaveReqOrder, GetOrderList } from '../types/Request/Order.request';
import { SaveUpdateResOrder } from '../types/Response/Order.response';
import { Tags, Body, Route, Post, Security } from 'tsoa';
import CustomError from '../utils/error';

import { ORDER } from '../types/Document/Order.document';

@Route('order')
@Tags('order')
export class OrderController {
	constructor() {}
	@Post('/saveOrder')
	async saveOrder(@Body() Order: SaveReqOrder): Promise<SaveUpdateResOrder> {
		const savedOrder = await new MainOrder().saveOrder(<ORDER>Order);
		if (!savedOrder) {
			throw new CustomError(400, ' Order Not Saved');
		}
		return <SaveUpdateResOrder>savedOrder;
	}
	@Security('api_key')
	@Post('/getOrderList')
	async getOrderList(
		@Body() getReq: GetOrderList
	): Promise<SaveUpdateResOrder[]> {
		const allOrder = await new MainOrder().getOrderList(getReq.id);
		if (!allOrder) {
			throw new CustomError(400, 'No order Found');
		}
		return <SaveUpdateResOrder[]>allOrder;
	}
}
