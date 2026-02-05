import { Controller } from '@nestjs/common';
import { Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('questions')
export class QuestionController {
  constructor(private readonly service: QuestionService) {}

  @Get()
  findAll(@Query('locale') locale?: string, @Query('segment') segment?: string) {
    return this.service.findAll(locale, segment);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() data: CreateQuestionDto) {
    return this.service.create(data);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateQuestionDto,
  ) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }
}
