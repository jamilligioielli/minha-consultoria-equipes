import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Equipe } from './equipe.entity';

@Injectable()
export class EquipeService {
  constructor(
    @Inject('EQUIPE_REPOSITORY')
    private equipeRepository: Repository<Equipe>,
  ) {}

  async createEquipe(nomeEquipe: string, linkGrupoBatePapo: string, valorBonusTotalCiclo: string, valorBonusEstimadoCiclo: string, idStatus: number, idLider: number, idConsultor: number): Promise<Equipe[]> {
    return this.equipeRepository.query(`INSERT INTO EQUIPE (nome_equipe, link_grupo_bate_papo, valor_bonus_total_ciclo, valor_bonus_estimado_ciclo, id_status, id_lider, id_consultor) VALUES (
      '${nomeEquipe}', '${linkGrupoBatePapo}', '${valorBonusTotalCiclo}', '${valorBonusEstimadoCiclo}', ${idStatus}, ${idLider}, ${idConsultor})`);
  }

  async findAll(): Promise<Equipe[]> {
    return this.equipeRepository.query('SELECT * FROM EQUIPE');
  }

  async findById(idEquipe: number): Promise<Equipe[]> {
    return this.equipeRepository.query(`SELECT * FROM EQUIPE WHERE id_equpe = ${idEquipe}`);
  }
}
