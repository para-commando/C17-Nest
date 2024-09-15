import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ database: 'ELEPHANT_ALPHA_DB', name: 'User' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
