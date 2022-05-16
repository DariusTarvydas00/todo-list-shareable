import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('sadfsdfdghfdadfgdfgfdgfgsdfdssdfdsfsdfsdfsdfsdsdfdfsdfdfsdfsdsdfdfdfasdsdfdsdfsdffsdfsdfsdasdasdfasdf');
    return 'Hello World!';
  }
}