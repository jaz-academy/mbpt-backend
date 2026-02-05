import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultProfileContent } from './result-profile-content.entity';
import { ResultProfile } from './result-profile.entity';
import { ResultProfileService } from './result-profile.service';
import { ResultProfileController } from './result-profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResultProfileContent, ResultProfile])],
  controllers: [ResultProfileController],
  providers: [ResultProfileService],
})
export class ResultProfileModule {}
