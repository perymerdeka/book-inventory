import { Length, IsString } from 'class-validator';

export class RegisterUsersDto {
  @IsString()
  @Length(5, 10)
  username: string;
  @IsString()
  @Length(5, 10)
  password: string;

  @IsString()
  @Length(5, 10)
  name: string;
}
