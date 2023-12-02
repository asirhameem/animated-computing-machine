import {Controller, Get} from '@nestjs/common';

@Controller('player')
export class PlayerController {

  @Get("/1")
  getPlayers () {

  }

}
