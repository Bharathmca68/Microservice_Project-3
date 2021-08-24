import { Controller, Logger, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private appService: AppService) { }

  // Define the message pattern for this method
  @MessagePattern('add')
  // Define the logic to be executed
  async accumulate(data: number[]) {
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.appService.accumulate(data); // use math service to calc result & return
  }
}
