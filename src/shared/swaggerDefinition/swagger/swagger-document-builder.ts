import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerUI } from './swagger-ui.class';
import { _SWAGGER_TAGS } from './swagger-tags/swagger-tags.constants';

export class SwaggerDocumentBuilder {
  constructor(private readonly app: INestApplication<any>) {}

  private buildConfig() {
    const docBuilder = new DocumentBuilder()
      .setTitle('C17-nest API Client')
      .setDescription(
        'This is a NestJs boilerplate code backend API interface.',
      )
      .setVersion('2.0')
      .addBasicAuth()
      .addBearerAuth(
        {
          bearerFormat: 'Bearer',
          scheme: 'Bearer',
          type: 'http',
          in: 'Header',
        },
        'JWTAuthorization',
      );

    _SWAGGER_TAGS.forEach((tag) => {
      docBuilder.addTag(tag.name, tag.description);
    });

    return docBuilder.build();
  }

  private createDocument() {
    const config = this.buildConfig();
    return SwaggerModule.createDocument(this.app, config);
  }

  public setupSwagger() {
    const document = this.createDocument();
    console.log(
      '🎖️🎖️  ⚔️  file: swagger-document-builder.ts:49  ⚔️  SwaggerDocumentBuilder  ⚔️  setupSwagger  ⚔️   process.env.SWAGGER_URL, 🎖️🎖️',
      process.env.SWAGGER_URL,
    );

    const swaggerUI = new SwaggerUI(process.env.APPLICATION_URL);
    SwaggerModule.setup(
      process.env.SWAGGER_URL,
      this.app,
      document,
      swaggerUI.customOptions,
    );
  }
}
