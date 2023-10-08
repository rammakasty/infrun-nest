import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/CatRequestDto';

@Injectable()
export class CatsService {
    constructor(@Injectable(Cat.name) private readonly catModel: Model<Cat>) {}

    async signUp(body: CatsService) {
        const { email, name, password} = body;
        const isCatExist = await this.catModel.exists( {email} )

        if (isCatExist){
            throw new HttpException('해당하는 고양이는 이미 존재합니다.', 403)
        }

    }
}
