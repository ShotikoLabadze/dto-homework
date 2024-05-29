import {
  IsEmail,
  IsInt,
  IsIn,
  IsPhoneNumber,
  IsString,
  Length,
  Min,
  Max,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 15)
  firstname: string;

  @IsString()
  @Length(3, 15)
  lastname: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(12)
  @Max(65)
  age: number;

  @IsPhoneNumber(null)
  phone: string;

  @IsIn(['male', 'female'])
  gender: string;
}
