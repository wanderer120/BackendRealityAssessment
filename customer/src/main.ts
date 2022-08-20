import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  // const app: NestExpressApplication = await NestFactory.create(AppModule);
  // const config: ConfigService = app.get(ConfigService);
  // const port: number = config.get<number>('PORT');

  // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  // await app.listen(port, () => {
  //   console.log('[WEB]', config.get<string>('BASE_URL'));
  // });
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8888,
    },
  });
  app.listen();
}

bootstrap();