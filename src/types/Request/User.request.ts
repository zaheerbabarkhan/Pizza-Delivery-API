export interface SaveReqUser {
	Name: string;
	Email: string;
	Cell: string;
	Address: String;
}

export interface UpdateReqUser {
	Name: string;
	Email: string;
	Cell: string;
	Address: String;
}

export interface ConfirmReqUser {
	Cell: string;
}

export interface AuthReqUser {
	_id: string;
	ConfirmationCode: number;
}
