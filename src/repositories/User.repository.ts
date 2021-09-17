import { USER } from '../types/Document/User.document';
import { USERSchema } from '../model/User.model';
import { ConfirmResUser } from '../types/Response/User.response';
import { AuthReqUser } from '../types/Request/User.request';

export class MainUser {
	saveUser(User: USER) {
		return new USERSchema(User).save();
	}
	updateUser(User: USER) {
		return USERSchema.findByIdAndUpdate(User._id, User, {
			new: true,
		});
	}
	getUser(_id: string) {
		return USERSchema.findById(_id);
	}
	confirmUser(Cell: string) {
		return <ConfirmResUser>(
			(<any>USERSchema.find({ Cell: Cell }).select('ConfirmationCode')).limit(1)
		);
	}
	authenricateUser(_id: string) {
		return USERSchema.findById(_id);
	}
}
