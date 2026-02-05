import { Controller, Get, Param, Query } from '@nestjs/common';
import { ResultProfileService } from './result-profile.service';
import { ResultProfileQueryDto } from './dto/result-profile-query.dto';

@Controller('result-profiles')
export class ResultProfileController {
  constructor(private readonly service: ResultProfileService) {}

  @Get(':id')
  findOne(@Param('id') id: string, @Query() query: ResultProfileQueryDto) {
    return this.service.findOne(id, query.segment, query.locale);
  }
}
