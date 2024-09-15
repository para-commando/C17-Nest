import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerDocumentBuilder } from './swagger/swagger-document-builder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService();
  const APP_PORT = config.get<number>('APP_PORT') || 3000;
  const APP_HOST = config.get<number>('APP_HOST') || 'localhost';
  app.enableCors();
  // Set up Swagger/OpenAPI documentation
  // const configs = new DocumentBuilder()
  //   .setTitle('Ghatak Nest API')
  //   .setDescription('API documentation for Ghatak Nest boilerplate')
  //   .setVersion('1.0')
  //   .addTag('Ghatak') // You can group endpoints using tags
  //   .build();

  // const document = SwaggerModule.createDocument(app, configs);
  // SwaggerModule.setup('api/docs', app, document); // Serve docs at /api/docs
 
  const swaggerDocumentBuilder = new SwaggerDocumentBuilder(app);
  swaggerDocumentBuilder.setupSwagger();
  await app.listen(APP_PORT);
  console.log(
    `🪖  Ghatak-Nest 🪺  can be accessed on 📡 http://${APP_HOST}:${APP_PORT} 🛰️`,
  );
}
bootstrap();
