import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {CreateCouponDto} from './dto/create-coupon.dto';
import {UpdateCouponDto} from './dto/update-coupon.dto';
import {Repository} from "typeorm";
import {Coupon} from "../entities/Coupon";
import {InjectRepository} from "@nestjs/typeorm";
import {RedeemCouponDto} from "./dto/redeem-coupon.dto";
import {Player} from "../entities/Player";
import {Reward} from "../entities/Reward";
import {PlayerService} from "../player/player.service";
import {RewardService} from "../reward/reward.service";
import {PlayerCouponService} from "../player-coupon/player-coupon.service";

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon) private readonly couponRepository: Repository<Coupon>,
    private readonly playerService: PlayerService,
    private readonly rewardService: RewardService,
  ) {
  }

  async create(createCouponDto: CreateCouponDto) {
    try {
      const reward = await this.rewardService.findOne(createCouponDto.rewardId);
      const coupon = await this.couponRepository.create({value: createCouponDto.value, Reward: reward});
      return this.couponRepository.save(coupon);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async redeem(redeemCoupon: RedeemCouponDto) {
    try {
      const player = await this.playerService.getPlayerById(redeemCoupon.playerId);
      const reward = await this.rewardService.findOne(redeemCoupon.rewardId);

    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  findAll() {
    return this.couponRepository.query("select * from coupon");
  }

  getById(id: number) {
    try {
      return this.couponRepository.query(`select * from coupon where id = ${id}`);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  findByCouponId(id: number) {
    try {
      return this.couponRepository.findBy({id: id});
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  getRewardUsedToday (couponId: number) {
    try {
      return
    } catch (e) {
       throw new InternalServerErrorException(e);
    }

  }

  update(id: number, updateCouponDto: UpdateCouponDto) {
    return `This action updates a #${id} coupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} coupon`;
  }
}
