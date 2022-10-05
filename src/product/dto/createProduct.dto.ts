import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'

export class CreateProductDto {
	@IsNotEmpty()
	@IsString()
	@Length(3, 25)
	name: string

	@IsNotEmpty()
	@IsString()
	@Length(3, 25)
	brand: string

	@IsNotEmpty()
	@IsNumber()
	price: number
}
