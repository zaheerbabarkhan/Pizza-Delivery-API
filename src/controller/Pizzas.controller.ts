import { SaveResPizzas } from '../types/Response/Pizzas.response';
import { SaveReqPizza } from '../types/Request/Pizzas.request';
import CustomError from '../utils/error';
import { PIZZAS } from '../types/Document/Pizzas.document';
import { MianPizza } from '../repositories/Pizza.repository';
import { Tags, Post, Route, Body } from 'tsoa';

@Route('pizza')
@Tags('pizza')
export class PizzaController {
	constructor() {}
	@Post('/savePizza')
	async savePizza(@Body() Pizza: SaveReqPizza): Promise<SaveResPizzas> {
		const savedPizza = await new MianPizza().savePizza(<PIZZAS>Pizza);
		if (!savedPizza) {
			throw new CustomError(400, 'Pizza NOt Saved');
		}
		return <SaveResPizzas>savedPizza;
	}
}
