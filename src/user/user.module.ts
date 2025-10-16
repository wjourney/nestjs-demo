import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([User])], // 注册 Repository
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // 如果其他模块需要使用 UserService
})
export class UserModule {}
