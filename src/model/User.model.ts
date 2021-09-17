import { Schema, model } from 'mongoose';
import { USER } from '../types/Document/User.document';

const UserSchema = new Schema({
	Name: {
		type: String,
	},
	Email: {
		type: String,
	},
	Cell: {
		type: String,
		unique: true,
	},
	Address: {
		type: String,
	},
	ConfirmationCode: {
		type: Number,
		default: Math.floor(100000 + Math.random() * 900000),
	},
});

export const USERSchema = model<USER>('User', UserSchema);
