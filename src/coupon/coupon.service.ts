import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import {Repository} from "typeorm";
import {Coupon} from "../entities/Coupon";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class CouponService {
  constructor(@InjectRepository(Coupon) private readonly couponRepository :Repository<Coupon>) {  }
  create(createCouponDto: CreateCouponDto) {
    try {
      return this.couponRepository.insert(createCouponDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return `This action returns all coupon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coupon`;
  }

  update(id: number, updateCouponDto: UpdateCouponDto) {
    return `This action updates a #${id} coupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} coupon`;
  }
}
