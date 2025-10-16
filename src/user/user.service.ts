import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  // 注入 TypeORM 的 Repository
  constructor(
    @InjectRepository(User) 
    private readonly userRepository: Repository<User>,
  ) {}

  // 创建用户
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  // 获取所有用户
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // 根据 ID 查找用户
  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  // 更新用户
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id); // 先查是否存在
    Object.assign(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  // 删除用户
  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
