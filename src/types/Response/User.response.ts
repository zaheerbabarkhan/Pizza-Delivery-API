export interface SaveUpdateResUser {
	_id: string;
	Name: string;
	Email: string;
	Cell: string;
	Address: String;
}

export interface ConfirmResUser {
	_id: string;
	ConfirmationCode: number;
}

export interface AuthResUser {
	token: string;
}

export interface CustomResponse {
	name: string;
	age: number;
}
