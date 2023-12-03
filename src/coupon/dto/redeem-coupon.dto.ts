import {IsNotEmpty, IsNumber,} from "class-validator";

export class RedeemCouponDto {
  @IsNumber()
  @IsNotEmpty()
  readonly playerId: number

  @IsNumber()
  @IsNotEmpty()
  readonly rewardId: number
}
