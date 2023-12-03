import {IsNotEmpty, IsString, Length} from "class-validator";

export class CreatePlayerDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  readonly name: string;
}