import { Module } from '@nestjs/common';
import { ConverterService } from './converter.service';
import { Converter } from './converter';
import { ConverterController } from './converter.controller';

@Module({
  controllers: [ConverterController],
  providers: [ConverterService, Converter],
})
export class ConverterModule {}
