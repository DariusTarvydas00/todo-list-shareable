import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('sadfsdfdghfdadfgdfgfdgfgsdfdssdfdsfsdfsdfsdfsdsdfdfdsdfsdffsdfsdfsdasdasdfasdf');
    return 'Hello World!';
  }
}