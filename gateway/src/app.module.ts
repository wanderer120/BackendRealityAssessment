import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'customerService',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8888,
        },
      },
      {
        name: 'productService',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8887,
        },
      }
      ,
      {
        name: 'orderService',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8886,
        },
      }
      ,
      {
        name: 'paymentService',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8885,
        },
      }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}