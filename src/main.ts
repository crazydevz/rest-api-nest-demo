import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true, // Removes extra values, not supported by DTO
			forbidNonWhitelisted: true, // Throws error when extra values are received
			transformOptions: { enableImplicitConversion: true }, // Transforms values automatically as per DTO
		})
	)
	await app.listen(3000)
}
bootstrap()
