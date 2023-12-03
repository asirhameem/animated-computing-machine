import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Coupon} from "../entities/Coupon";
import {PlayerModule} from "../player/player.module";
import {RewardModule} from "../reward/reward.module";


@Module({
  imports: [TypeOrmModule.forFeature([Coupon]), PlayerModule, RewardModule],
  controllers: [CouponController],
  providers: [CouponService],
})
export class CouponModule {}
