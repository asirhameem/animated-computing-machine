import {Controller, Get, InternalServerErrorException, NotFoundException, Post} from '@nestjs/common';
import {PlayerService} from "./player.service";
@Controller('player')
export class PlayerController {

  constructor(private playerService : PlayerService) {
  }
  @Get()
  async getPlayers () {
    try {
      const data = await this.playerService.getAllPlayers();
      if (!data?.length) {
        return new NotFoundException();
      }
      return data;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  @Post()
  createPlayer(name: string) {
    try {
      return this.playerService.createPlayer(name);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

}
