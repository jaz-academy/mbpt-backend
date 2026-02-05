import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './result.entity';
import { PdfService } from '../pdf/pdf.service';
import { EmailService } from '../email/email.service';
import type { ResultFuel, ResultScores } from './result.type';

@Injectable()
export class ResultService {
  private static readonly fuelOrder: ResultFuel[] = [
    'vision',
    'meaning',
    'validation',
    'fear',
  ];

  constructor(
    @InjectRepository(Result)
    private repo: Repository<Result>,
    private pdfService: PdfService,
    private emailService: EmailService,
  ) {}

  create(data: Partial<Result>) {
    if (data.scores && !data.profile) {
      data.profile = this.resolveProfile(data.scores);
    }
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  findById(id: string) {
    return this.repo.findOneBy({ id });
  }

  async sendResult(id: string) {
    const result = await this.findById(id);
    if (!result) {
      throw new NotFoundException('Result not found');
    }
    if (!result.email) {
      throw new BadRequestException('Email is required to send result');
    }

    try {
      const pdf = await this.pdfService.generateResultPdf(result.id);
      return this.emailService.sendResult(result.email, pdf);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  resolveProfile(scores: ResultScores): string {
    const entries = Object.entries(scores) as [ResultFuel, number][];
    if (entries.length === 0) return 'vision';

    const sorted = entries.sort((a, b) => {
      const scoreDiff = b[1] - a[1];
      if (scoreDiff !== 0) return scoreDiff;
      return (
        ResultService.fuelOrder.indexOf(a[0]) -
        ResultService.fuelOrder.indexOf(b[0])
      );
    });

    const [first, second] = sorted;
    if (!second) return first[0];

    const diff = first[1] - second[1];
    if (diff <= 4) {
      return [first[0], second[0]].join('+');
    }

    return first[0];
  }
}
