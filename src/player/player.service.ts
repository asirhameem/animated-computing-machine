import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Player} from "../entities/Player";
import {Repository} from "typeorm";

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private usersRepository: Repository<Player>,
  ) {}
}
