import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  Res,
  NotFoundException,
  BadRequestException,
  StreamableFile,
} from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { ResultService } from './result.service';
import { PdfService } from '../pdf/pdf.service';
import type { Response } from 'express';

@Controller('results')
export class ResultController {
  constructor(
    private readonly service: ResultService,
    private readonly pdfService: PdfService,
  ) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto: CreateResultDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    const result = await this.service.findById(id);
    if (!result) throw new NotFoundException('Result not found');
    return result;
  }

  @Get(':id/pdf')
  async downloadPdf(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
    @Query('locale') locale?: string,
    @Query('segment') segment?: string,
  ) {
    const result = await this.service.findById(id);
    if (!result) throw new NotFoundException('Result not found');

    const pdf = await this.pdfService.generateResultPdf(result.id, {
      locale: locale ?? result.locale ?? 'id',
      segment: segment ?? result.segment ?? 'adult',
    });

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Length': pdf.length,
      'Content-Disposition': 'inline; filename=result.pdf',
    });
    return new StreamableFile(pdf);
  }

  @Post(':id/send')
  async send(@Param('id') id: string) {
    const result = await this.service.findById(id);
    if (!result) throw new NotFoundException('Result not found');
    if (!result.email) {
      throw new BadRequestException('Email is required to send result');
    }

    await this.service.sendResult(id);
    return { message: 'Result sent successfully' };
  }
}
