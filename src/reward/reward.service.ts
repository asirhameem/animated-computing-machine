import {Injectable, InternalServerErrorException} from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Reward} from "../entities/Reward";

@Injectable()
export class RewardService {
  constructor(@InjectRepository(Reward) private readonly rewardRepository :Repository<Reward>) {  }
  create(createRewardDto: CreateRewardDto) {
    try {
      return this.rewardRepository.insert(createRewardDto);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  findAll() {
    try {
      return this.rewardRepository.query("select * from reward");
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  findOne(id: number) {
    try {
      return this.rewardRepository.findOneBy({id: id});
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  update(id: number, updateRewardDto: UpdateRewardDto) {
    return `This action updates a #${id} reward`;
  }

  remove(id: number) {
    return `This action removes a #${id} reward`;
  }
}
