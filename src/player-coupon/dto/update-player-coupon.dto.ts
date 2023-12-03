import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerCouponDto } from './create-player-coupon.dto';

export class UpdatePlayerCouponDto extends PartialType(CreatePlayerCouponDto) {}
