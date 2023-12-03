import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import {PlayerService} from "./player.service";
import {CreatePlayerDto} from "./dto/create-player.dto";

@Controller('player')
@UsePipes(ValidationPipe)
export class PlayerController {

  constructor(private playerService: PlayerService) {
  }

  @Get()
  async getPlayers() {
    try {
      const data = await this.playerService.getAllPlayers();
      if (!data?.length) {
        return {
          statusCode: 400,
          message: 'No players found',
          data: data,
        };
      }
      return {
        statusCode: 200,
        message: 'Players fetched successfully',
        data: data,
      };
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
  async createPlayer(@Body() createPlayer : CreatePlayerDto) {
    try {
      const insertOp = await this.playerService.createPlayer(createPlayer);
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
