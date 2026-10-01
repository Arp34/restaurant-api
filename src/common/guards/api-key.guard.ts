import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class ApiKeyGuard implements CanActivate {

  canActivate(context: ExecutionContext): boolean {
  
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    if (apiKey !== 'restaurant-secret') {
      throw new ForbiddenException('API Key inválida o faltante'); // Estado 403
    }
  
    return true; // La petición tiene permiso de continuar
  }
}