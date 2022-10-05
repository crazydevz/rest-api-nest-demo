import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	@Length(3, 25)
	name: string

	@IsNotEmpty()
	@IsEmail()
	email: string

	@IsNotEmpty()
	@IsString()
	@Length(8, 25)
	password: string
}
