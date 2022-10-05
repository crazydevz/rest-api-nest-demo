import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(private readonly service: AuthService) {
		super({ usernameField: 'email' })
	}

	async validate(email: string, password: string): Promise<any> {
		const user = await this.service.validateUser(email, password)
		if (!user) {
			throw new UnauthorizedException()
		}
		return user
	}
}
