import {IsNotEmpty, IsNumber} from "class-validator";

export class CreatePlayerCouponDto {
  @IsNotEmpty()
  @IsNumber()
  playerId: number;

  @IsNotEmpty()
  @IsNumber()
  couponId: number;
}
