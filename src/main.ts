import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Environment } from './config/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = Environment.PORT;
  const HOST = Environment.HOST;
  await app.listen(PORT);

  console.log(`Servidor escuchando en ${HOST}:${PORT}/ ... `);
}
bootstrap();
