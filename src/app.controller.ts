import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Req() req: Request): string {
   console.log(req);
    req
    return this.appService.getHello();
  }
}
