import {IsDate, IsNotEmpty, IsNumber, IsString, Length} from "class-validator";

export class CreateRewardDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 20)
  readonly name : string;
  @IsString()
  @IsNotEmpty()
  readonly startDate: string;
  @IsString()
  @IsNotEmpty()
  readonly endDate: string;
  @IsNumber()
  @IsNotEmpty()
  readonly perDayLimit: number;
  @IsNumber()
  @IsNotEmpty()
  readonly totalLimit: number;
}
