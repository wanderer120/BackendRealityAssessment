import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';
import {Order_Product} from './order_product.entity';

export enum OrderStatus {
    CREATED = "created",
    CONFIRMED = "confirmed",
    DELIVERED = "delivered",
    CANCELED = "canceled"
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({type: 'decimal'})
  public user_id: number;

  @Column({type: "enum", enum: OrderStatus, default: OrderStatus.CREATED})
  public status: OrderStatus;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  @OneToMany(type => Order_Product, order_product => order_product.order, { cascade: ['insert', 'update'] })
  public products:Order_Product[];
  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}