import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class UpdateQuestionDto {
  @IsOptional()
  @IsString()
  segment?: string;

  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @IsString()
  motivation?: string;

  @IsOptional()
  @IsInt()
  weight?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;

  @IsOptional()
  @IsString()
  locale?: string;
}
