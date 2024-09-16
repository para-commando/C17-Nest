import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerDocumentBuilder } from './shared/swaggerDefinition/swagger/swagger-document-builder';
import { LogDefinitionService } from './shared/log-definition/log-definition.service';



async function bootstrap() {

  const app = await NestFactory.create(AppModule,{
    bufferLogs: true,
  });
  app.useLogger(app.get(LogDefinitionService));

  const config = new ConfigService();
  const APP_PORT = config.get<number>('APP_PORT') || 3000;
  const APP_HOST = config.get<string>('APP_HOST') || 'localhost';
  const SWAGGER_URL = config.get<string>('SWAGGER_URL');
  const NON_SWAGGER_URL = config.get<string>('NON_SWAGGER_URL');

  app.enableCors();
  app.setGlobalPrefix(NON_SWAGGER_URL);

  const swaggerDocumentBuilder = new SwaggerDocumentBuilder(app);
  swaggerDocumentBuilder.setupSwagger();

  await app.listen(APP_PORT);

  console.log(
    `🪖  Ghatak-Nest 🪺 swagger UI can be accessed on 📡 http://${APP_HOST}:${APP_PORT}/${SWAGGER_URL} 🛰️`,
  );
  console.log(
    `🪖  Ghatak-Nest 🪺 plain endpoints can be accessed on 📡 http://${APP_HOST}:${APP_PORT}/${NON_SWAGGER_URL} 🛰️`,
  );
}
bootstrap();
