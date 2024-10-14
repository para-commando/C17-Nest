import { Logger, MiddlewareConsumer, Module, NestModule, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import {
  postgresAlphaDbConfig,
  mySqlAlphaDbConfig,
} from './shared/config/databaseConfig';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CacheModule } from './shared/cache/cache.module';
import loadYamlConfig from './shared/config/loadYamlConfig';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LogDefinitionService } from './shared/log-definition/log-definition.service';
import { LogDefinitionMiddleware } from './shared/log-definition/log-definition.middleware';
import { OrdersModule } from './api/orders/orders.module';
import { DeliveriesModule } from './api/deliveries/deliveries.module';
import { InventoriesModule } from './api/inventories/inventories.module';
import { NotificationsModule } from './api/notifications/notifications.module';
import { ClientsModule } from './api/clients/clients.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../src/shared/swaggerDefinition', 'wwwroot'),
      serveRoot: '/api/wwwroot',
    }),
    ConfigModule.forRoot({
      load: [loadYamlConfig],
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
    }),
    CacheModule,
    OrdersModule,
    ClientsModule,
    DeliveriesModule,
    InventoriesModule,
    NotificationsModule,

  ],
  controllers: [AppController],
  providers: [AppService, LogDefinitionService],
})
export class AppModule implements OnModuleInit, NestModule {


  private readonly logger = new Logger(AppModule.name);
  private postgresAlphaDataSource: DataSource;
  private mySqlAlphaDataSource: DataSource;
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogDefinitionMiddleware).forRoutes('*');
  }

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    try {
      // Initialize PostgreSQL DataSource
      this.postgresAlphaDataSource = new DataSource(
        postgresAlphaDbConfig(this.configService),
      );
      await this.postgresAlphaDataSource.initialize();
      this.logger.log('🐘 Postgres 🐘 AlphaDataSource connected 💡 ✅');

      // Initialize MySQL DataSource
      this.mySqlAlphaDataSource = new DataSource(
        mySqlAlphaDbConfig(this.configService),
      );
      await this.mySqlAlphaDataSource.initialize();
      this.logger.log('🐬 MySQL 🐬 AlphaDataSource connected 💡 ✅');
    } catch (error) {
      console.log(
        '🎖️🎖️  ⚔️  file: app.module.ts:40  ⚔️  AppModule  ⚔️  onModuleInit  ⚔️  error 🎖️🎖️',
        error,
      );

      this.logger.error('Database connection failed', error);
    }
  }
}
