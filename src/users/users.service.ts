import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  createUser(user: UserDto): UserDto {
    return UserDto.plainToClass(user);
  }
}
