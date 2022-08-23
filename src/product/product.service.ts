import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product } from './product.schema'

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product.name)
		private productModel: Model<Product>
	) {}

	createProduct(productDto: Product) {
		const createdProduct = new this.productModel(productDto)

		return createdProduct.save()
	}
}
