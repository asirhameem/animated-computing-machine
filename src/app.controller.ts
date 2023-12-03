import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import {AppService} from './app.service';
import {PlayerService} from "./player/player.service";
import {CouponService} from "./coupon/coupon.service";
import {PlayerCouponService} from "./player-coupon/player-coupon.service";
import {RewardService} from "./reward/reward.service";

@Controller()
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
  async redeemCoupon(@Body() body: { playerId: number; rewardId: number }) {
    const playerInfo = await this.playerService.getPlayerById(body.playerId);
    // const couponInfo = await this.couponService.findOne(body.rewardId);
    const couponInfo = await this.couponService.getById(body.rewardId);
    const rewardInfo = await this.rewardService.findOne(couponInfo[0].rewardId);
    const playerCoupon = await this.playerCouponService.create({playerId: body.playerId, couponId: body.rewardId});
    console.log(rewardInfo);
  }
}
