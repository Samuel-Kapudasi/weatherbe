import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const cookie = require('cookie-session');



app.use(cookie({keys:['cook']}));
app.use(session({secret:'sess', resave:false, saveUninitialized:true,}));
  // Configure cookie parsing middleware
  
  app.enableCors({
    origin:'http://localhost:3001',
    credentials:true,
  });
  await app.listen(3000);
}
bootstrap();

