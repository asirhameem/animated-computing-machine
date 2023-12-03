import { Module } from '@nestjs/common';
import { PlayerCouponService } from './player-coupon.service';
import { PlayerCouponController } from './player-coupon.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlayerCoupon} from "../entities/PlayerCoupon";
import {PlayerModule} from "../player/player.module";
import {CouponModule} from "../coupon/coupon.module";

@Module({
  imports: [TypeOrmModule.forFeature([PlayerCoupon]), PlayerModule, CouponModule],
  controllers: [PlayerCouponController],
  providers: [PlayerCouponService],
  exports: [PlayerCouponService]
})
export class PlayerCouponModule {}
