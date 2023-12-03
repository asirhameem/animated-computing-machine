import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Coupon} from "../entities/Coupon";

@Module({
  imports: [TypeOrmModule.forFeature([Coupon])],
  controllers: [CouponController],
  providers: [CouponService],
})
export class CouponModule {}
