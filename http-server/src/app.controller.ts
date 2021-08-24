import { Controller, Logger, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private appService: AppService) { }

  // Map the 'POST /add' route to this method
  @Post('add')
  // Define the logic to be executed
  async accumulate(@Body('data') data: number[]) {
    console.log(data)
    this.logger.log('Adding ' + data.toString()); // Log something on every call
    return this.appService.accumulate(data); // use math service to calc result & return
  }
}
