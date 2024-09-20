import { Injectable } from '@nestjs/common';
import equipes from './mocks/equipes';

@Injectable()
export class AppService {
  constructor() {}

  async getViewData(): Promise<any> {
    return {
      title: 'Minha Consultoria',
      nivel: 'Semente',
      consultor: {
        nome: 'Joana da Silva',
      },
      equipes: equipes,
    };
  }
}
