import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getViewData(): string {
    return 'Hello World';
  }
}
