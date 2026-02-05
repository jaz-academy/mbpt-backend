import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import type { ResultAnswers, ResultScores } from './result.type';

@Entity('results')
export class Result {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'jsonb' })
  answers: ResultAnswers;

  @Column({ type: 'jsonb' })
  scores: ResultScores;

  @Column()
  profile: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ default: 'adult' })
  segment: string;

  @Column({ default: 'id' })
  locale: string;

  @CreateDateColumn()
  createdAt: Date;
}
