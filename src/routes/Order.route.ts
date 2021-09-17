import express from 'express';
import { OrderController } from '../controller/Order.controller';
import { auth } from '../middleware/auth.middleware';
export class OrderRouter {
	router: express.Router;
	constructor() {
		this.router = express.Router();
		this.routes();
	}
	routes() {
		this.router.post('/saveOrder', async (req, res, next) => {
			const saveReq = req.body;
			const savedOrder = await new OrderController().saveOrder(saveReq);
			res.status(200).json({
				message: savedOrder,
			});
		});
		this.router.post('/getOrderList', auth, async (req, res, next) => {
			try {
				const id = res.locals.id;
				const allOrderList = await new OrderController().getOrderList(id);
				res.status(200).json({
					data: allOrderList,
				});
			} catch (error) {
				next(error);
			}
		});
	}
}

export const OrderApi = new OrderRouter().router;
