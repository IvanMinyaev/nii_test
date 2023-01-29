import { ApiProperty } from '@nestjs/swagger';

export class DataDto {
  @ApiProperty({ example: '2', description: 'Передаваемое число' })
  cubicM: number;
  @ApiProperty({ example: '2', description: 'Передаваемое число' })
  thousandCubicM: number;
  @ApiProperty({ example: '2', description: 'Передаваемое число' })
  millionCubicM: number;
  @ApiProperty({ example: '2', description: 'Передаваемое число' })
  billionCubicM: number;
  changeableParameter: string;
}
