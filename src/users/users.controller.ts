import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return 'get all users';
  }

  @Post()
  createUser(@Body() user: UserDto): Pick<UserDto, 'username'> {
    user.id = Date.now().toString();
    user.createdAt = new Date();
    user.updatedAt = new Date();

    return UserDto.plainToClass(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: string) {
    return `This action returns id #${id}`;
  }
}
