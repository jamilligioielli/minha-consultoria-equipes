import { Injectable } from '@nestjs/common';
import { LiderViewData } from 'src/interfaces/liderViewData';
import { CidadeService } from 'src/models/cidade/cidade.service';

@Injectable()
export class LiderService {
  constructor(private readonly cidadeService: CidadeService) {}

  async getViewData(): Promise<LiderViewData> {
    return {
      title: 'Minha Consultoria | Equipes',
      cidade: await this.getCidade(),
    };
  }
  async getCidade(): Promise<string> {
    let a = '';
    return this.cidadeService.findAll().then((cidade) => {
      a = cidade[0]['NOME'];
      console.log(cidade);
      return a;
    });
  }
}
