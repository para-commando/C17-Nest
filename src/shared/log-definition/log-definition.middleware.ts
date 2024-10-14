import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LogDefinitionService } from './log-definition.service'; // Custom logger from above
@Injectable()
export class LogDefinitionMiddleware implements NestMiddleware {
  constructor(private readonly logger: LogDefinitionService) {}

  use(req: Request, res: Response, next: NextFunction) {
     let ip = req.ip;

    // If behind a proxy, the real IP might be in the X-Forwarded-For header
    const forwarded = req.headers['x-forwarded-for'];

    if (forwarded) {
      ip = Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0];
    }

    this.logger.log('Incoming request', 'RequestLogger', ip);
    next();
  }
}
