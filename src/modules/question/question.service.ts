import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private repo: Repository<Question>,
  ) {}

  findAll(locale?: string, segment?: string) {
    const where: Record<string, string> = {};
    if (locale) where.locale = locale;
    if (segment) where.segment = segment;

    return this.repo.find({
      where: Object.keys(where).length > 0 ? where : undefined,
      order: {
        order: 'ASC',
      },
    });
  }

  findById(id: number) {
    return this.repo.findOneBy({ id });
  }

  create(data: CreateQuestionDto) {
    return this.repo.save(data);
  }

  update(id: number, data: UpdateQuestionDto) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
