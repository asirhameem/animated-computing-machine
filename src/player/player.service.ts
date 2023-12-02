import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Player} from "../entities/Player";
import {Repository} from "typeorm";

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  createPlayer(name: string): Promise<any> {
    return this.playerRepository.insert({name: name});
  }

  getPlayerById(id: number) {
    return this.playerRepository.findOneBy({id: id});
  }

  getAllPlayers() {
    return this.playerRepository.query('select * from player');
  }
}
