import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConverterController } from './converter/converter.controller';
import { ConverterModule } from './converter/converter.module';
import { ConverterService } from './converter/converter.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ConverterModule,
  ],
  controllers: [ConverterController],
  providers: [ConverterService],
})
export class AppModule {}
