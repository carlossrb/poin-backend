import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userEmail: string;

  @Column()
  userName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
