// src/cache/cache.module.ts
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheService } from './cache.service';
import { redisConfig } from '../config/databaseConfig';

@Global() // This makes the module and its providers globally available
@Module({
  imports: [ConfigModule], // Load environment and config globally
  providers: [
    CacheService,
    {
      provide: 'REDIS_CLIENT',
      useFactory: (configService: ConfigService) => redisConfig(configService),
      inject: [ConfigService],
    },
  ],
  exports: [CacheService], // Export CacheService to make it available globally
})
export class CacheModule {}
