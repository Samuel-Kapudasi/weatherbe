import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports:[AdminModule]
})
export class WeatherModule {}
