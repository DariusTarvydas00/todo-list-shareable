import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('fdgsfdgdfgdfghfghdfdfgdfgsdfgdfggdfg')
    return 'Hello World!';
  }
}