import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('introduction_contents')
@Index(['segment', 'locale'], { unique: true })
export class IntroductionContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  segment: string;

  @Column()
  locale: string;

  @Column({ type: 'jsonb' })
  content: Record<string, unknown>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
