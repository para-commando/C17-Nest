import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import loadYamlConfig from './config/loadYamlConfig';
import { envValidationSchema } from './Schema/envConfigs.schema';

@Module({
  // If a secrete variable is found in multiple files, the first one takes precedence.
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],  // Loads the .env files
      load: [loadYamlConfig],                // Loads the YAML configuration
      isGlobal: true,                       // Makes ConfigModule available globally
      cache: true,                          // Caches the configuration
      validationSchema: envValidationSchema,   // Applies the Joi validation
      validationOptions: {
        allowUnknown: true,                 // Allows unknown fields in config
        abortEarly: true,                   // Stops validation on the first error
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
