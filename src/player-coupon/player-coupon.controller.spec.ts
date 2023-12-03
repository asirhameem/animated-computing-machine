import { Test, TestingModule } from '@nestjs/testing';
import { PlayerCouponController } from './player-coupon.controller';
import { PlayerCouponService } from './player-coupon.service';

describe('PlayerCouponController', () => {
  let controller: PlayerCouponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerCouponController],
      providers: [PlayerCouponService],
    }).compile();

    controller = module.get<PlayerCouponController>(PlayerCouponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
