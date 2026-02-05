import { Module } from '@nestjs/common';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './result.entity';
import { PdfModule } from '../pdf/pdf.module';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [TypeOrmModule.forFeature([Result]), PdfModule, EmailModule],
  controllers: [ResultController],
  providers: [ResultService],
})
export class ResultModule {}
