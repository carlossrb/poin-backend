import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class AccountLogEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userEmail: string;

  @Column()
  userName: string;

  @Column()
  message: string;

  @Column('jsonb')
  metadata: Record<string, unknown>;

  @Column()
  profileId: number;

  @CreateDateColumn()
  createdAt: Date;
}
