import { Controller, HttpException, Patch, UseFilters } from '@nestjs/common';
import { Delete, Get, Post, Put } from '@nestjs/common';
import { HttpExceptionFilter } from 'http-exception.filter';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    @UseFilters(HttpExceptionFilter)
    getAllCat() {
        throw new HttpException('api broken', 401)
        return 'get all cat api'
    }
    @Post()
    GetOneCat() {

    }

    }

