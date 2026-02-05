import { Test, TestingModule } from '@nestjs/testing';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { PdfService } from '../pdf/pdf.service';
import { EmailService } from '../email/email.service';

describe('ResultController', () => {
  let controller: ResultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResultController],
      providers: [
        {
          provide: ResultService,
          useValue: {},
        },
        {
          provide: PdfService,
          useValue: {},
        },
        {
          provide: EmailService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ResultController>(ResultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
