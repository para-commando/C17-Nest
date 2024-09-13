import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
interface DatabaseConfig {
  url: string;
  port: number;
  database: string;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const dbConfigs = this.configService.get<DatabaseConfig>('db.postgres');

    console.log(
      '🎖️🎖️  ⚔️  file: app.controller.ts:15  ⚔️  AppController  ⚔️  getHello  ⚔️  dbConfigs 🎖️🎖️',
      dbConfigs,
    );
    const httpPort = this.configService.get<string>('http.port');

    console.log(
      '🎖️🎖️  ⚔️  file: app.controller.ts:23  ⚔️  AppController  ⚔️  getHello  ⚔️  httpPort 🎖️🎖️',
      httpPort,
    );
    const httpHost = this.configService.get<string>('HOST');

    console.log("🎖️🎖️  ⚔️  file: app.controller.ts:33  ⚔️  AppController  ⚔️  getHello  ⚔️  httpHost 🎖️🎖️", httpHost)

    return this.appService.getHello();
  }
}
