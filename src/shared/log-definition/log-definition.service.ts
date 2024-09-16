import { LoggerService, Injectable } from '@nestjs/common';
import * as winston from 'winston';
@Injectable()
export class LogDefinitionService implements LoggerService {

  private readonly logger: winston.Logger;
  private context = 'ghatak-nest'; // Default context

  constructor() {
    winston.addColors({
      error: 'red',
      warn: 'yellow',
      info: 'green',
      debug: 'blue',
      verbose: 'cyan',
    });

    this.logger = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize({ all: true }), // Apply colors to all log levels
        winston.format.errors({ stack: true }),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(({ timestamp, level, message, context, ip }) => {
          return `[${timestamp}] [${context}] [${ip || 'N/A'}] ${level}: ${message}`;
        })
      ),
      transports: [new winston.transports.Console({

    }),],
    });
  }

  setContext(context: string) {
    this.context = context;
  }

  log(message: string, context?: string, ip?: string) {
    this.logger.info(message, { context, ip });
  }

  error(message: string, trace: string, context?: string, ip?: string) {
    this.logger.error(message, { trace, context, ip });
  }

  warn(message: string, context?: string, ip?: string) {
    this.logger.warn(message, { context, ip });
  }


  debug(message: string, context?: string, ip?: string) {
    this.logger.debug(message, { context, ip });
  }

  verbose(message: string, context?: string, ip?: string) {
    this.logger.verbose(message, { context, ip });
  }

}
