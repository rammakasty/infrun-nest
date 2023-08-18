import { Controller } from '@nestjs/common';
import { Request } from "express";
import { Response } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {

        
    }
}
