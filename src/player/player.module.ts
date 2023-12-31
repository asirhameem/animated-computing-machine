import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Player} from "../entities/Player";

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayerController],
  providers: [PlayerService],
  exports: [PlayerService]
})
export class PlayerModule {}
