import { Test, TestingModule } from '@nestjs/testing';
import { ResultService } from './result.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Result } from './result.entity';
import { PdfService } from '../pdf/pdf.service';
import { EmailService } from '../email/email.service';

describe('ResultService', () => {
  let service: ResultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ResultService,
        {
          provide: getRepositoryToken(Result),
          useValue: {},
        },
        {
          provide: PdfService,
          useValue: { generate: jest.fn() },
        },
        {
          provide: EmailService,
          useValue: { sendResult: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<ResultService>(ResultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
