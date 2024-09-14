import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'DOLPHIN_ALPHA_DB', name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product: string;

  @Column()
  quantity: number;
}
