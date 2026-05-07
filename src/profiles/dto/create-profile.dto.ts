import { IsString, Length } from 'class-validator';

export class CreateprofileDto {
  @IsString()
  @Length(3, 100)
  name: string;
  description: string;
}
