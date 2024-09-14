import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { postgresAlphaDbConfig, mySqlAlphaDbConfig } from './config/databaseConfig';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import loadYamlConfig from './config/loadYamlConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loadYamlConfig],
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);
  private postgresAlphaDataSource: DataSource;
  private mySqlAlphaDataSource: DataSource;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    try {
      // Initialize PostgreSQL DataSource
      this.postgresAlphaDataSource = new DataSource(postgresAlphaDbConfig(this.configService));
       await this.postgresAlphaDataSource.initialize();
      this.logger.log('🐘 Postgres 🐘 AlphaDataSource connected 💡 ✅');

      // Initialize MySQL DataSource
      this.mySqlAlphaDataSource = new DataSource(mySqlAlphaDbConfig(this.configService));
      await this.mySqlAlphaDataSource.initialize();
      this.logger.log('🐬 MySQL 🐬 AlphaDataSource connected 💡 ✅');
    } catch (error) {

      console.log("🎖️🎖️  ⚔️  file: app.module.ts:40  ⚔️  AppModule  ⚔️  onModuleInit  ⚔️  error 🎖️🎖️", error)

      this.logger.error('Database connection failed', error);
    }
  }
}
