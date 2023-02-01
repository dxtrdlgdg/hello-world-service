import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! 0.1, ${process.env.SOME_SAMPLE_SERVICE}`;
  }
}
