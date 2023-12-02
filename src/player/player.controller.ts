import {Body, Controller, Get, InternalServerErrorException, NotFoundException, Param, Post} from '@nestjs/common';
import {PlayerService} from "./player.service";

@Controller('player')
export class PlayerController {

  constructor(private playerService: PlayerService) {
  }

  @Get()
  async getPlayers() {
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

  @Get(':id')
  async findPlayer(@Param('id') id: number) {
    try {
      const player = await this.playerService.getPlayerById(id);
      return {
        statusCode: 200,
        message: 'Player found',
        data: player,
      };
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  @Post()
  async createPlayer(@Body() name: string) {
    try {
      const insertOp = await this.playerService.createPlayer(name);
      if (insertOp.raw.affectedRows <= 0) {
        return {
          statusCode: 400,
          message: 'Can not create player.',
        };
      }
      return {
        statusCode: 201,
        message: 'Player created successfully',
        data: {
          id: insertOp.raw.insertId,
        },
      };
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }


}
