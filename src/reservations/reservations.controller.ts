import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @UseGuards(ApiKeyGuard) // Protege solo este endpoint
  create(@Body() createReservationDto: CreateReservationDto) {

    // Simulando el guardado
    return {
      id: Math.floor(Math.random() * 1000),
      ...createReservationDto,
    };
  }

  @Get()
  // No tiene @UseGuards, es público
  findAll() {
    return [
      { id: 1, customerName: 'Carlos Pérez', email: 'carlos@email.com', people: 4 }
    ];
  }
}