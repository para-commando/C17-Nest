import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService();
  const APP_PORT =config.get<number>('APP_PORT') || 3000;
  const APP_HOST =config.get<number>('APP_HOST') || 'localhost';
  app.enableCors();
  await app.listen(APP_PORT);
  console.log(`🪖  Ghatak-Nest 🪺  can be accessed on 📡 http://${APP_HOST}:${APP_PORT} 🛰️`);
}
bootstrap();
