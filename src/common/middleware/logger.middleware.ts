import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {

    const { method, originalUrl } = req;
    const startTime = Date.now();
    const time = new Date().toLocaleTimeString(); // Hora de llegada

    // Se ejecuta cuando la respuesta termina
    res.on('finish', () => {

      const duration = Date.now() - startTime;

      this.logger.log(`[REQUEST] ${method} ${originalUrl} ${time} - ${duration}ms`);
    });

    next(); // Permite que la petición continúe su flujo
  }
}