import { Controller, HttpException, Patch } from '@nestjs/common';
import { Delete, Get, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    getAllCat() {
        throw new HttpException('api is broken', 401)
        return 'get all cat api'
    }
    @Post()
    GetOneCat() {
        
    }

    }

