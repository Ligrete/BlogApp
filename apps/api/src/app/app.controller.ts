import { Controller, Get } from '@nestjs/common';

import { Message } from '@blog-app-workspace/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('profile')
  getProfile(): any {
    return this.appService.getProfile();
  }
}
