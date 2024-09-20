import { Injectable } from '@nestjs/common';
import { EquipeViewData } from 'src/interfaces/equipeViewData';
import { LiderService } from 'src/models/lider/lider.service';
import { NivelService } from 'src/models/nivel/nivel.service';
import { EquipeService } from 'src/models/equipe/equipe.service';
import { PessoaService } from 'src/models/pessoa/pessoa.service';
import equipes from 'src/mocks/equipes';
import consultoresEquipe from 'src/mocks/consultoresEquipe';
import { AppService } from 'src/app.service';

@Injectable()
export class EquipeDataService {
  constructor(
    private readonly equipeService: EquipeService,
    private readonly liderService: LiderService,
    private readonly nivelService: NivelService,
    private readonly pessoaService: PessoaService,
    private readonly appService: AppService,
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
  async getViewData(id?: number): Promise<any> {
    return {
      nivel: 'Semente',
      consultor: this.appService.getConsultorLogado(),
      equipe: {
        ...equipes.filter((e) => e.idEquipe == id)[0],
        ciclo: 'Ciclo 25 - Agosto a Setembro de 2024',
        consultores: consultoresEquipe.sort(
          (a, b) => b.totalVendido - a.totalVendido,
        ),
        totalLucro: this.getTotal('totalLucro'),
        totalInvestido: this.getTotal('totalInvestido'),
        totalVendido: this.getTotal('totalVendido'),
        nicho: 'Faces',
        totalVendas: this.getTotalVendas(),
      },
    };
  }

  getTotal(campo: string) {
    return consultoresEquipe
      .map((e) => e[campo])
      .reduce((acc, curr) => acc + curr, 0);
  }

  getTotalVendas() {
    return consultoresEquipe
      .map((e) => e.vendasRealizadas.length)
      .reduce((acc, curr) => acc + curr, 0);
  }
}
