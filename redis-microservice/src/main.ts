import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

//create a logger instance 
const logger = new Logger('Main')

//creating a microservices option object
const microservicesOption = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  },
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesOption);
  app.listen()
}

bootstrap();


