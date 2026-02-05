import { Controller, Get, Query } from '@nestjs/common';
import { IntroductionService } from './introduction.service';
import { IntroductionQueryDto } from './dto/introduction-query.dto';

@Controller('introduction')
export class IntroductionController {
  constructor(private readonly service: IntroductionService) {}

  @Get()
  find(@Query() query: IntroductionQueryDto) {
    return this.service.findBySegment(query.segment, query.locale);
  }
}
