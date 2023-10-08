import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/CatRequestDto'; // Assuming you have a DTO for incoming cat data
import * as bcrypt from 'bcrypt'; // Import bcrypt library

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async signUp(catRequestDto: CatRequestDto) {
    const { email, name, password } = catRequestDto;
    const isCatExist = await this.catModel.exists({ email });
  
    if (isCatExist) {
        throw new UnauthorizedException('해당하는 고양이는 이미 존재합니다.')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
}
}
