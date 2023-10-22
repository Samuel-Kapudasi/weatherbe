import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService],
  imports:[AdminModule]
})
export class WeatherModule {}
