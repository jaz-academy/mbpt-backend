import { IsIn, IsOptional, IsString } from 'class-validator';

export class ResultProfileQueryDto {
  @IsString()
  @IsIn(['adult', 'kids'])
  segment: string;

  @IsOptional()
  @IsString()
  locale?: string;
}
