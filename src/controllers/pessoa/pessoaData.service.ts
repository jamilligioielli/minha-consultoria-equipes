import { Injectable } from '@nestjs/common';
import { PessoaViewData } from 'src/interfaces/pessoaViewData';
import { PessoaService } from 'src/models/pessoa/pessoa.service';

@Injectable()
export class PessoaDataService {
  constructor(private readonly pessoaService: PessoaService) {}

  async getViewData(): Promise<PessoaViewData> {
    const pessoa = await this.getPessoa();
    // return {
    //   idConsultor: pessoa[0]['id_consultor'],
    //   cpf: pessoa[0]['cpf'],
    //   email: pessoa[0]['email'],
    //   celular: pessoa[0]['celular'],
    //   tipo: pessoa[0]['tipo'],
    //   idEndereco: pessoa[0]['id_endereco'],
    // };
    return pessoa[0];
  }

  async getPessoa(): Promise<PessoaViewData[]> {
    let pessoaData;
    this.pessoaService.findAll().then(async (pessoa) => {
      pessoaData = pessoa.map(async (pessoa) => {
        return {
          nomePessoa: pessoa.nome,
          totalVendido: Math.floor(Math.random() * (500 - 0)),
          nivel: 'semente',
          qtdCliente: 10,
          nicho: 'pele',
        };
      });
    });
    return pessoaData;
  }
}
