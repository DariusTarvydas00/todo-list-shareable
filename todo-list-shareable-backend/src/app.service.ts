import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('fdgsfdgdfgdfghfghdfdfgdfgsdfgdfgdsfgdfgghfdfgfgdhfghfdgdfggdfdfggdfg')
    return 'Hello World!';
  }
}