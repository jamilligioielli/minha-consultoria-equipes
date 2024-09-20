import { Injectable } from '@nestjs/common';
import equipes from './mocks/equipes';

@Injectable()
export class AppService {
  constructor() {}

  async getViewData(): Promise<any> {
    return {
      title: 'Minha Consultoria',
      nivel: 'Semente',
      equipes: equipes,
      consultor: this.getConsultorLogado(),
    };
  }

  getConsultorLogado() {
    return {
      nome: 'Joana da Silva',
      equipe: 1,
      localizacao: 'Jardim Peri Peri - SP',
    };
  }
}
