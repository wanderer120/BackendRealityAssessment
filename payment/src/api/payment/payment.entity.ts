import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'boolean'})
  public status: boolean;

  @Column({ type: 'decimal'})
  public order_id: number;

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