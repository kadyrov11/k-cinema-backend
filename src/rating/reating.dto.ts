import { IsNumber } from 'class-validator';
export class RatingDto {
  @IsNumber()
  value: number;
}

