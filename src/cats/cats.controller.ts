import { Controller, HttpException, Param, ParseIntPipe, Patch, UseFilters } from '@nestjs/common';
import { Delete, Get, Post, Put } from '@nestjs/common';
import { PositiveIntPipe } from 'common/pipes/positiveint.pipe';
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
    
    @Get(':id')
    getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
        console.log(param);
        console.log(typeof param);
        return 'get one cat api' 
    }



    @Post()
    GetOneCat() {
        return 'create cat api'

    }

    }

