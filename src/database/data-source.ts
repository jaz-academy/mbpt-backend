import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Result } from '../modules/result/result.entity';
import { Question } from '../modules/question/question.entity';
import { IntroductionContent } from '../modules/introduction/introduction.entity';
import { ResultProfile } from '../modules/result-profile/result-profile.entity';
import { ResultProfileContent } from '../modules/result-profile/result-profile-content.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: true,
  subscribers: [],
  entities: [
    Result,
    Question,
    IntroductionContent,
    ResultProfile,
    ResultProfileContent,
  ],
  migrations: ['src/database/migrations/*.ts'],
});
