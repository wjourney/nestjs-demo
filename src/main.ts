import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置全局前缀（如 API 版本控制）
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 8888);
}
bootstrap();
