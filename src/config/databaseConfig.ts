import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

export const postgresAlphaDbConfig = (configService: ConfigService): DataSourceOptions => ({

  type: 'postgres',
  host: configService.get<string>('db.postgres.host'),
  port: configService.get<number>('db.postgres.port'),
  username: configService.get<string>('db.postgres.username'),
  password: configService.get<string>('db.postgres.password'),
  database: configService.get<string>('db.postgres.databaseName'),
  entities: [__dirname + '/../**/*.pgSqlEntity.{js,ts}'],
  synchronize: configService.get<boolean>('db.postgres.isSynchronized'), // Set to false in production
  logging: ['error'],  // You can enable logging for various events

});

export const mySqlAlphaDbConfig = (configService: ConfigService): DataSourceOptions => ({


  type: 'mysql',
  host: configService.get<string>('MYSQL_ALPHA_DB_HOST'),
  port: configService.get<number>('MYSQL_ALPHA_DB_PORT'),
  username: configService.get<string>('MYSQL_ALPHA_DB_USERNAME'),
  password: configService.get<string>('MYSQL_ALPHA_DB_PASSWORD'),
  database: configService.get<string>('MYSQL_ALPHA_DB_DATABASE'),
  entities: [__dirname + '/../**/*.mySqlEntity.{js,ts}'],
  synchronize: configService.get<boolean>('MYSQL_ALPHA_DB_SYNCHRONIZE') || false,
  logging: ['error'],  // You can enable logging for various events

});