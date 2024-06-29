import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAll() {
    return 'get all users';
  }

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    user.id = Date.now().toString();
    user.createdAt = new Date();
    user.updatedAt = new Date();

    return this.userService.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: string) {
    return `This action returns id #${id}`;
  }
}
