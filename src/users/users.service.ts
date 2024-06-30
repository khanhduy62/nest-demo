import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { StoreConfig } from 'src/store/store.config';

@Injectable()
export class UsersService {
  constructor(@Inject('STORE_CONFIG') storeConfig: StoreConfig) {
    console.log('log--storeConfig ', storeConfig);
  }
  createUser(user: UserDto): UserDto {
    return UserDto.plainToClass(user);
  }
}
