import express from 'express';
import { UserController } from '../controller/User.controller';
import {
	SaveReqUser,
	UpdateReqUser,
	ConfirmReqUser,
	AuthReqUser,
} from '../types/Request/User.request';
import {
	SaveUpdateResUser,
	ConfirmResUser,
	AuthResUser,
	CustomResponse,
} from '../types/Response/User.response';
import jwt from 'jsonwebtoken';

export class UserRouter {
	router: express.Router;
	constructor() {
		this.router = express.Router();
		this.routes();
	}
	routes() {
		this.router.post('/saveUser', async (req, res, next) => {
			try {
				const saveReq: SaveReqUser = req.body;
				const savedUser: SaveUpdateResUser =
					await new UserController().saveUser(saveReq);
				res.json({
					message: {
						_id: savedUser._id,
						Name: savedUser.Name,
						Email: savedUser.Email,
						Cell: savedUser.Cell,
						Address: savedUser.Address,
					},
				});
			} catch (error) {
				next(error);
			}
		});
		this.router.put('/updateUser', async (req, res, next) => {
			try {
				const updateReq: UpdateReqUser = req.body;
				const updatedUser = await new UserController().updateUser(updateReq);
				return res.json({
					message: updatedUser,
				});
			} catch (error) {
				next(error);
			}
		});
		this.router.post('/confirmUser', async (req, res, next) => {
			try {
				const confirmReq: ConfirmReqUser = req.body;
				const confirmCode: ConfirmResUser[] = await (<any>(
					new UserController().confirmUser(confirmReq)
				));

				console.log(confirmCode);
				return res.json({
					confirmCode: confirmCode[0].ConfirmationCode,
				});
			} catch (error) {
				next(error);
			}
		});
		this.router.post('/authUser', async (req, res, next) => {
			try {
				const authReq: AuthReqUser = req.body;
				const authUser = await new UserController().authUser(authReq);
				if (authUser) {
					if (authUser.ConfirmationCode === authReq.ConfirmationCode) {
						return res.json({
							token: jwt.sign({ _id: authUser._id }, 'this is the key'),
						});
					}
				} else {
					return res.status(400).json({
						message: 'User NOt Found',
					});
				}
			} catch (error) {
				next(error);
			}
		});

		this.router.get('/getData', function (req, res, next) {
			const response = new UserController().getData();
			res.send(response);
		});
	}
}

const createToken = (_id: string) => {
	const token = jwt.sign({ _id }, 'this is the key');
	return token;
};

export const UserApi = new UserRouter().router;
