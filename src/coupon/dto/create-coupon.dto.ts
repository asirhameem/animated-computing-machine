import {IsNotEmpty, IsNumber, IsString, Length} from "class-validator";

export class CreateCouponDto {
  @IsString()
  @Length(3, 20)
  @IsNotEmpty()
  readonly value: string

  @IsNumber()
  @IsNotEmpty()
  readonly rewardId: number
}
