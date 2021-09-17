import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { USERSchema } from '../model/User.model';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
	const token: any = req.header('token');
	const userId: any = jwt.verify(token, 'this is the key');
	const user = await USERSchema.findById(userId._id);
	if (user) {
		res.locals.id = userId._id;
		next();
	} else {
		return res.status(400).json({
			message: 'User not found',
		});
	}
};
