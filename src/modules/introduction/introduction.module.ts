import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntroductionContent } from './introduction.entity';
import { IntroductionService } from './introduction.service';
import { IntroductionController } from './introduction.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IntroductionContent])],
  controllers: [IntroductionController],
  providers: [IntroductionService],
})
export class IntroductionModule {}
