import { IsString, IsOptional, IsObject } from 'class-validator';
import type { ResultAnswers, ResultScores } from '../result.type';

export class CreateResultDto {
  @IsObject()
  answers: ResultAnswers;

  @IsObject()
  scores: ResultScores;

  @IsOptional()
  @IsString()
  profile?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  segment?: string;

  @IsOptional()
  @IsString()
  locale?: string;
}
