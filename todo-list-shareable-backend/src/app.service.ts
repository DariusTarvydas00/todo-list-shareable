import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('asdsdfsdasdfsdfsadfsdfsdfgdsfgfdghdfghjsdfgsdfgdfsdfgsdfgdfgdfgsdfsdfsdfsdfsdfgdgfddfgdfgsdfgdfgdfgdfgdfgsadf')
    return 'Hello World!';
  }
}