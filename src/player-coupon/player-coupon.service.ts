import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreatePlayerCouponDto } from './dto/create-player-coupon.dto';
import { UpdatePlayerCouponDto } from './dto/update-player-coupon.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PlayerService} from "../player/player.service";
import {PlayerCoupon} from "../entities/PlayerCoupon";
import {CouponService} from "../coupon/coupon.service";

@Injectable()
export class PlayerCouponService {

  constructor(
    @InjectRepository(PlayerCoupon) private readonly playerCouponRepository: Repository<PlayerCoupon>,
    private readonly playerService: PlayerService,
    private readonly couponService: CouponService,
  ) {
  }

  create(createPlayerCouponDto: CreatePlayerCouponDto) {
    try {
      const newPlayerCoupon = this.playerCouponRepository.create(createPlayerCouponDto);
      return this.playerCouponRepository.save(newPlayerCoupon);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }

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
