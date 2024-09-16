import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [], // You can import other modules here if needed
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
