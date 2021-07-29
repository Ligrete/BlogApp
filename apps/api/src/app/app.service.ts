import { Injectable } from '@nestjs/common';
import { Message } from '@blog-app-workspace/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getProfile(): any {
    return { name: 'Vilsur', lastName: 'Karimov' };
  }
}
