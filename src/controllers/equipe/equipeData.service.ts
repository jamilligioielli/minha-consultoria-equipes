import { Injectable } from '@nestjs/common';
import { Equipe } from 'src/models/equipe/equipe.entity';
import { EquipeViewData } from 'src/interfaces/equipeViewData';
import { EquipeService } from 'src/models/equipe/equipe.service';

@Injectable()
export class EquipeDataService {
  constructor(private readonly equipeService: EquipeService,
    
  ) {}

  async getViewData(): Promise<EquipeViewData> {
    const equipe: Equipe[] = await this.getEquipe();
    return {
      nomeEquipe: equipe[0]['nome_equipe'],
      linkGrupoBatePapo: equipe[0]['link_grupo_bate_papo'],
      valorBonusTotalCiclo: equipe[0]['valor_bonus_total_ciclo'],
      valorBonusEstimadoCiclo: equipe[0]['valor_bonus_estimado_ciclo'],
      idStatus: equipe[0]['id_status'],
      idLider: equipe[0]['id_lider'],
      idConsultor: equipe[0]['id_consultor'],
    };
  }

  async getEquipe(): Promise<Equipe[]> {
    return this.equipeService.findAll().then((equipe) => {
      console.log(`Equipe ${equipe}`);
      return equipe;
    });
  }
}
