import {Injectable, InternalServerErrorException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Player} from "../entities/Player";
import {Repository} from "typeorm";
import {CreatePlayerDto} from "./dto/create-player.dto";

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  createPlayer(player: CreatePlayerDto): Promise<any> {
    try {
      return this.playerRepository.insert({name: player.name});
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  getPlayerById(id: number) : Promise<Player>{
    try {
      return this.playerRepository.findOneBy({id: id});
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  getAllPlayers() : Promise<Player[]> {
    try {
      return this.playerRepository.query('select * from player');
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
