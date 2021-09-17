export default class ErrorHandler extends Error {
	stausCode: any;
	message: any;
	constructor(statusCode: any, message: any) {
		super();
		this.stausCode = statusCode;
		this.message = message;
	}
}
