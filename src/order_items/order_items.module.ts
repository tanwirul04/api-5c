import { Module } from '@nestjs/common';
import { OrderItemsController } from './order_items.controller.js';
import { OrderItemsService } from './order_items.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-items-entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService]
})
export class OrderItemsModule {}
