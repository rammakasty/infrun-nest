import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/CatRequestDto';

@Injectable()
export class CatsService {
    constructor(@Injectable(Cat.name) private readonly catModel: Model<Cat>) {}

    signUp(body: CatsService) {
        
    }
}
