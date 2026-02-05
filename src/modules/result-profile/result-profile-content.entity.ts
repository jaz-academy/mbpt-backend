import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('result_profile_contents')
@Index(['profileId', 'segment', 'locale'], { unique: true })
export class ResultProfileContent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  profileId: string;

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
