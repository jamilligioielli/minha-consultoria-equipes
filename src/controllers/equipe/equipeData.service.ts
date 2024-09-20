import { Injectable } from '@nestjs/common';
import { EquipeViewData } from 'src/interfaces/equipeViewData';
import { LiderService } from 'src/models/lider/lider.service';
import { NivelService } from 'src/models/nivel/nivel.service';
import { EquipeService } from 'src/models/equipe/equipe.service';
import { PessoaService } from 'src/models/pessoa/pessoa.service';

@Injectable()
export class EquipeDataService {
  constructor(
    private readonly equipeService: EquipeService,
    private readonly liderService: LiderService,
    private readonly nivelService: NivelService,
    private readonly pessoaService: PessoaService,
  ) {}

  // async getEquipe(): Promise<EquipeViewData[]> {
  //   this.equipeService.findAll().then(async equipe => {
  //     return equipe.map(async equipe => {
  //       let idLider = await this.liderService.finById(equipe.id_lider).then(a => a.id_lider)
  //       let nomePessoa = await this.pessoaService.findById(idLider).then(a => a.nome)
  //       let nomeNivel = await this.nivelService.findById(equipe.id_status).then(a => a.nome_nivel)
  //       return {
  //         nomeEquipe: equipe.nome_equipe,
  //         descricao: equipe.descricao,
  //         endereco: "Jardim Peri Peri, SP",
  //         nomeLider: nomePessoa,
  //         nivel: nomeNivel,
  //       }
  //     })
  //   })
  // }
}
