import { Document } from 'mongoose';

export interface USER extends Document {
	_id: string;
	Name: string;
	Email: string;
	Cell: string;
	Address: String;
	ConfirmationCode?: number;
}
