import { Injectable } from '@nestjs/common';
import { CreatePlayerCouponDto } from './dto/create-player-coupon.dto';
import { UpdatePlayerCouponDto } from './dto/update-player-coupon.dto';

@Injectable()
export class PlayerCouponService {
  create(createPlayerCouponDto: CreatePlayerCouponDto) {
    return 'This action adds a new playerCoupon';
  }

  findAll() {
    return `This action returns all playerCoupon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerCoupon`;
  }

  update(id: number, updatePlayerCouponDto: UpdatePlayerCouponDto) {
    return `This action updates a #${id} playerCoupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerCoupon`;
  }
}
