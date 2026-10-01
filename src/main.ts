import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activar ValidationPipe globalmente
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  
  // Activar Exception Filter globalmente
  app.useGlobalFilters(new HttpExceptionFilter());
  
  // Activar Interceptor globalmente
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3000);
}
bootstrap();