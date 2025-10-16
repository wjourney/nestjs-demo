import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as mysql from 'mysql2'; // 👈 显式导入

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'wenwen0815',
      database: 'nestjs_demo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,

      // ✅ 强制使用你安装的 mysql2
      driver: mysql,

      // 可选：强制认证方式
      extra: {
        authPlugin: 'mysql_native_password',
      },
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
