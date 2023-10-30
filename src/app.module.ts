import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './user/user.module';
import { AdminController } from './admin/admin.controller';

import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './admin/admin.cities.entity';

@Module({
  imports: [AdminModule, TypeOrmModule.forRoot(
    {
      type:'postgres',
      host:'localhost',
      port:5432,
      password:'Sh@nks123',
      username:'postgres',

      database:'work_db',
      entities:[City,Admin],
      synchronize:true,
    }
  ), WeatherModule],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
