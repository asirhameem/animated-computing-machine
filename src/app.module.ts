import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeorm from './typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PlayerModule } from './player/player.module';
import { CouponModule } from './coupon/coupon.module';
import { RewardModule } from './reward/reward.module';
import { PlayerCouponModule } from './player-coupon/player-coupon.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    PlayerModule,
    CouponModule,
    RewardModule,
    PlayerCouponModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
