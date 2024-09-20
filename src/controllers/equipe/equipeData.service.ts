import { Injectable } from '@nestjs/common';
import { EquipeViewData } from 'src/interfaces/equipeViewData';
import { LiderService } from 'src/models/lider/lider.service';
import { NivelService } from 'src/models/nivel/nivel.service';
import { EquipeService } from 'src/models/equipe/equipe.service';
import { PessoaService } from 'src/models/pessoa/pessoa.service';
import equipes from 'src/mocks/equipes';
import consultoresEquipe from 'src/mocks/consultoresEquipe';

@Injectable()
export class EquipeDataService {
  constructor(
    private readonly equipeService: EquipeService,
    private readonly liderService: LiderService,
    private readonly nivelService: NivelService,
    private readonly pessoaService: PessoaService,
  ) {}

  async getEquipe(): Promise<EquipeViewData[]> {
    let equipeData;
    this.equipeService.findAll().then(async (equipe) => {
      equipeData = equipe.map(async (equipe) => {
        const idLider = await this.liderService
          .findById(equipe.id_lider)
          .then((a) => a.id_lider);
        const nomePessoa = await this.pessoaService
          .findById(idLider)
          .then((a) => a.nome);
        const nomeNivel = await this.nivelService
          .findById(equipe.id_status)
          .then((a) => a.nome_nivel);
        return {
          nomeEquipe: equipe.nome_equipe,
          descricao: equipe.descricao,
          endereco: 'Jardim Peri Peri, SP',
          nomeLider: nomePessoa,
          nivel: nomeNivel,
        };
      });
    });
    return equipeData;
  }
  async getViewData(): Promise<any> {
    return {
      nivel: 'Semente',
      consultor: {
        nome: 'Joana da Silva',
      },
      equipe: {
        ...equipes[0],
        ciclo: 'Ciclo 25 - Agosto a Setembro de 2024',
        consultores: consultoresEquipe.sort(
          (a, b) => b.totalVendido - a.totalVendido,
        ),
      },
    };
  }
}
