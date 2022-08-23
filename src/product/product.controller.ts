import {
	Body,
	Controller,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Product } from './product.schema'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
	constructor(private service: ProductService) {}

	@Post()
	@UsePipes(ValidationPipe)
	createProduct(@Body() body: Product) {
		return this.service.createProduct(body)
	}
}
