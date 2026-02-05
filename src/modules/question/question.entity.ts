import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  segment: string;

  @Column()
  text: string;

  @Column()
  motivation: string;

  @Column()
  weight: number;

  @Column()
  order: number;

  @Column({ default: 'id' })
  locale: string;

  @CreateDateColumn()
  createdAt: Date;
}
