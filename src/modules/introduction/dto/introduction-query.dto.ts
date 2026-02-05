import { IsIn, IsOptional, IsString } from 'class-validator';

export class IntroductionQueryDto {
  @IsString()
  @IsIn(['adult', 'kids'])
  segment: string;

  @IsOptional()
  @IsString()
  locale?: string;
}
