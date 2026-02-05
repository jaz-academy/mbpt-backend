import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { ResultModule } from './modules/result/result.module';
import { PdfModule } from './modules/pdf/pdf.module';
import { EmailModule } from './modules/email/email.module';
import { QuestionModule } from './modules/question/question.module';
import { IntroductionModule } from './modules/introduction/introduction.module';
import { ResultProfileModule } from './modules/result-profile/result-profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    ResultModule,
    PdfModule,
    EmailModule,
    QuestionModule,
    IntroductionModule,
    ResultProfileModule,
  ],
})
export class AppModule {}
