import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MongoIdPipe implements PipeTransform {
  transform(value: string) {
    const regex =/^[a-f\d]{24}$/i
    if(!value.match(regex)){
      throw new BadRequestException('ID must have 24 hexadecimal characters');
    }
    return value;
  }
}
