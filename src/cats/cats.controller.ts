import { Body, UseFilters, UseInterceptors } from '@nestjs/common';
import { Controller, Get, Post, Put } from '@nestjs/common';
import { HttpExceptionFilter } from 'common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'common/interceptors/success.interceptor';
import { CatsService } from './cats.service';
import { CatRequestDto } from'./DTO/CatRequestDto'
@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post()
  async signUp(@Body() body: CatRequestDto) {
    console.log(body);
    return 'signup';
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}