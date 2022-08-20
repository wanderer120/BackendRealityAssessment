import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @MessagePattern({ cmd: 'ping' })
  // ping(_: any) {
  //   return of('pong1').pipe(delay(1000));
  // }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
