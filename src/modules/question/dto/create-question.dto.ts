import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  segment: string;

  @IsString()
  text: string;

  @IsString()
  motivation: string;

  @IsInt()
  weight: number;

  @IsInt()
  @Min(0)
  order: number;

  @IsOptional()
  @IsString()
  locale?: string;
}
