import { Post, Put, Route, Tags, Body, Get } from '@tsoa/runtime';
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
import { USER } from '../types/Document/User.document';
import { MainUser } from '../repositories/User.repository';
import CustomError from '../utils/error';

@Route('user')
@Tags('user')
export class UserController {
	@Post('/saveUser')
	async saveUser(@Body() User: SaveReqUser): Promise<SaveUpdateResUser> {
		const savedUser: USER = await new MainUser().saveUser(<USER>User);
		if (!savedUser) {
			throw new CustomError(400, 'User Not Saved');
		}
		return <SaveUpdateResUser>savedUser;
	}
	@Put('/updateUser')
	async updateUser(@Body() User: UpdateReqUser): Promise<SaveUpdateResUser> {
		const updatedUser: SaveUpdateResUser = await (<any>(
			new MainUser().updateUser(<USER>User)
		));
		if (!updatedUser) {
			throw new CustomError(400, 'User Not Updated');
		}
		return <SaveUpdateResUser>updatedUser;
	}
	@Post('/confirmUser')
	async confirmUser(
		@Body() confirmReq: ConfirmReqUser
	): Promise<ConfirmResUser> {
		const confirmUser = await new MainUser().confirmUser(confirmReq.Cell);
		if (!confirmUser) {
			throw new CustomError(404, 'User not found');
		}
		return <ConfirmResUser>confirmUser;
	}
	@Post('/authUser')
	async authUser(@Body() authReq: AuthReqUser) {
		const authUser = await new MainUser().authenricateUser(authReq._id);
		if (!authUser) {
			throw new CustomError(400, 'User Not Found');
		}
		return authUser;
	}

	@Get('/getData')
	getData(): CustomResponse {
		return {
			name: 'Rahat Murtaza',
			age: 16,
		};
	}
}
