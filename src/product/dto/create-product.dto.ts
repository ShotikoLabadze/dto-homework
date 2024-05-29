import {
  ArrayNotEmpty,
  IsArray,
  IsPositive,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(3, 255)
  title: string;

  @IsPositive()
  price: number;

  @IsString()
  @Length(150)
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString()
  colors: string[];

  @IsUrl()
  img: string;
}
