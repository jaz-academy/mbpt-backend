import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IntroductionContent } from './introduction.entity';

@Injectable()
export class IntroductionService {
  constructor(
    @InjectRepository(IntroductionContent)
    private repo: Repository<IntroductionContent>,
  ) {}

  async findBySegment(segment: string, locale?: string) {
    const resolvedLocale = locale ?? 'id';
    const row = await this.repo.findOneBy({
      segment,
      locale: resolvedLocale,
    });

    if (!row) {
      throw new NotFoundException('Introduction content not found');
    }

    return row;
  }
}
