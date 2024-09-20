import { Injectable } from '@nestjs/common';
import equipes from 'src/mocks/equipes';

@Injectable()
export class EquipeService {
  constructor() {}

  async getViewData(): Promise<any> {
    return {
      equipe: equipes[0],
    };
  }
}
