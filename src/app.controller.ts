import {Body, Controller, Get, Post, Req, UsePipes, ValidationPipe} from '@nestjs/common';
import {AppService} from './app.service';
import {PlayerService} from "./player/player.service";
import {CouponService} from "./coupon/coupon.service";
import {PlayerCouponService} from "./player-coupon/player-coupon.service";
import {RewardService} from "./reward/reward.service";
import {RedeemCouponDto} from "./coupon/dto/redeem-coupon.dto";
import {CreatePlayerCouponDto} from "./player-coupon/dto/create-player-coupon.dto";

@Controller()
@UsePipes(ValidationPipe)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly playerService: PlayerService,
    private readonly couponService: CouponService,
    private readonly rewardService: RewardService,
    private readonly playerCouponService: PlayerCouponService,
    ) {
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/coupon-redeem')
  async redeemCoupon(@Body() redeemCoupon: RedeemCouponDto) {
    const playerInfo = await this.playerService.getPlayerById(redeemCoupon.playerId);
    if (!!!playerInfo) {
      return {
        statusCode: 400,
        message: 'No player found',
      };
    }
    const couponInfo = await this.couponService.getById(redeemCoupon.rewardId);
    if (!couponInfo.length) {
      return {
        statusCode: 400,
        message: 'No coupon found',
      };
    }
    const playerCouponInfo = await this.playerCouponService.getByCouponId(redeemCoupon.rewardId);
    if (playerCouponInfo.length) {
      return {
        statusCode: 400,
        message: 'Coupon already redeemed',
      };
    }
    const rewardInfo = await this.rewardService.findOne(couponInfo[0].rewardId);
    const totalRedeemed = await this.couponService.totalRedeemed(rewardInfo.id);
    const totalRedeemedToday = await this.couponService.totalRedeemedToday(rewardInfo.id);

    if (new Date(rewardInfo.endDate) < new Date() || rewardInfo.totalLimit < totalRedeemed.length || rewardInfo.perDayLimit <= totalRedeemedToday.length) {
      return {
        statusCode: 400,
        message: 'Your coupon is invalid',
      };
    }

    const playerCoupon = await this.playerCouponService.create({playerId: redeemCoupon.playerId, couponId: redeemCoupon.rewardId});
    return {
      statusCode: 200,
      message: 'You are the lucky person',
      data:{
        prize: rewardInfo.name,
      }
    }
  }
}
