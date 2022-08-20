import { Type } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,ManyToOne } from 'typeorm';
import {Order} from './order.entity';

@Entity()
export class Order_Product {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(type=>Order, order=>order.id)
  public order:Order;

  @Column({type: "decimal"})
  product_id!: number;

  @Column({ type: 'boolean', default: false })
  public isDeleted: boolean;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}