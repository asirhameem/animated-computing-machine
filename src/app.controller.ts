import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/coupon-redeem')
  async redeemCoupon(@Body() body: { playerId: number; rewardId: number }): Promise<Object> {
    return {id: body.playerId, reward: body.rewardId};
  }
}
