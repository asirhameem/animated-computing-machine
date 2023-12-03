import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {CreatePlayerCouponDto} from './dto/create-player-coupon.dto';
import {UpdatePlayerCouponDto} from './dto/update-player-coupon.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PlayerService} from "../player/player.service";
import {PlayerCoupon} from "../entities/PlayerCoupon";
import {CouponService} from "../coupon/coupon.service";
import {Player} from "../entities/Player";
import {Coupon} from "../entities/Coupon";

@Injectable()
export class PlayerCouponService {

  constructor(
    @InjectRepository(PlayerCoupon) private readonly playerCouponRepository: Repository<PlayerCoupon>,
    private readonly playerService: PlayerService,
    private readonly couponService: CouponService,
  ) {
  }

  async create(createPlayerCouponDto: CreatePlayerCouponDto) {
    try {
      const playerInfo = await this.playerService.getPlayerById(createPlayerCouponDto.playerId);
      const coupon = await this.couponService.getById(createPlayerCouponDto.couponId);
      const newPlayerCoupon = await this.playerCouponRepository.create({
        redeemedAt: new Date(),
        player: playerInfo,
        coupon: coupon[0],
      });
      console.log(newPlayerCoupon);
      return this.playerCouponRepository.save(newPlayerCoupon);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  getByCouponId (id: number) {
    try {
      return this.playerCouponRepository.query(`select * from player_coupon where couponId = ${id}`)
    } catch (e) {
      throw new InternalServerErrorException(e);
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
