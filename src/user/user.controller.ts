// src/users/users.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // + 转成 number
  }

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put('/update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
