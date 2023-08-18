import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {  
    return this.appService.getHello()
  }
}

