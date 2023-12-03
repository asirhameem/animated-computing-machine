import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerCouponService } from './player-coupon.service';
import { CreatePlayerCouponDto } from './dto/create-player-coupon.dto';
import { UpdatePlayerCouponDto } from './dto/update-player-coupon.dto';

@Controller('player-coupon')
export class PlayerCouponController {
  constructor(private readonly playerCouponService: PlayerCouponService) {}

  @Post()
  create(@Body() createPlayerCouponDto: CreatePlayerCouponDto) {
    return this.playerCouponService.create(createPlayerCouponDto);
  }

  @Get()
  findAll() {
    return this.playerCouponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerCouponService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerCouponDto: UpdatePlayerCouponDto) {
    return this.playerCouponService.update(+id, updatePlayerCouponDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerCouponService.remove(+id);
  }
}
