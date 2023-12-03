import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Player} from "../entities/Player";
import {Repository} from "typeorm";
import {CreatePlayerDto} from "./dto/create-player.dto";

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}

  createPlayer(player: CreatePlayerDto): Promise<any> {
    return this.playerRepository.insert({name: player.name});
  }

  getPlayerById(id: number) : Promise<Player>{
    return this.playerRepository.findOneBy({id: id});
  }

  getAllPlayers() : Promise<Player[]> {
    return this.playerRepository.query('select * from player');
  }
}
