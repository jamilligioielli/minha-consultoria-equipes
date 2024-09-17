import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  async getViewData(): Promise<any> {
    return {
      title: 'Minha Consultoria | Equipes',
    };
  }
}
