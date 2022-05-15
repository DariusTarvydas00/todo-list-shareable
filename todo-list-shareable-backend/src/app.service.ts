import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('fdgsfdgdfgdfghfghdfdfgdfgsdfgdfgdsfgdfggdfg')
    return 'Hello World!';
  }
}