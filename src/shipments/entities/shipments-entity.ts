
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { Order } from '../../orders/entities/orders-entity.js';

@Entity('shipments')
export class Shipment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Order, (order) => order.shipment)
  @JoinColumn({ name: 'order_id' })
  order: Relation<Order>;

  @Column({ type: 'varchar', length: 100 })
  courier: string;

  @Column({
    name: 'tracking_number',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  trackingNumber: string | null;

  @Column({ type: 'varchar', length: 30 })
  status: string;

  @Column({ name: 'shipped_at', type: 'timestamp', nullable: true })
  shippedAt: Date | null;

  @Column({ name: 'delivered_at', type: 'timestamp', nullable: true })
  deliveredAt: Date | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  
  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
  
  @DeleteDateColumn({name: 'deleted_at', nullable: true})
  deletedAt: Date;
}