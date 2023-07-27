import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const data = `Hello World! 0.1, ${process.env.SERVICE_NAME}`;
    console.info(data);
    return data;
  }
}
