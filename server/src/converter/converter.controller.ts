import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConverterService } from './converter.service';
import { DataDto } from './dto/data.dto';

@ApiTags('Конвертация')
@Controller('/api/converter')
export class ConverterController {
  constructor(private readonly converterService: ConverterService) {}

  @ApiOperation({ summary: 'Конвертация данных ' })
  @ApiResponse({ status: 200, type: DataDto })
  @Post()
  create(@Body() dataDto: DataDto) {
    return this.converterService.convert(dataDto);
  }
}
