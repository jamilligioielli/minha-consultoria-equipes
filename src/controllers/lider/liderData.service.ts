import { Injectable } from '@nestjs/common';
import { LiderViewData } from 'src/interfaces/liderViewData';
import { Lider } from 'src/models/lider/lider.entity';
import { LiderService } from 'src/models/lider/lider.service';

@Injectable()
export class LiderDataService {
  constructor(private readonly liderService: LiderService,
    
  ) {}

  async getViewData(): Promise<LiderViewData> {
    const lider: Lider[] = await this.getLider();
    return {
      idLider: lider[0]['id_lider'],
      idConsultor: lider[0]['id_consultor'],
    };
  }

  async getLider(): Promise<Lider[]> {
    let a = 0;
    let b = '';
    return this.liderService.findAll().then((lider) => {
      a = lider[0]['id_lider']; //So pra visualizar dado
      b = lider[0]['id_consultor'];
      console.log(`Lider Id: ${a} Consultor: ${b}`);
      return lider;
    });
  }
}
