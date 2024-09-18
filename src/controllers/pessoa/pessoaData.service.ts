import { Injectable } from '@nestjs/common';
import { Pessoa } from 'src/models/pessoa/pessoa.entity';
import { PessoaViewData } from 'src/interfaces/PessoaViewData';
import { PessoaService } from 'src/models/pessoa/pessoa.service';

@Injectable()
export class PessoaDataService {
  constructor(private readonly pessoaService: PessoaService,
    
  ) {}

  async getViewData(): Promise<PessoaViewData> {
    const pessoa: Pessoa[] = await this.getPessoa();
    return {
      idConsultor: pessoa[0]['id_consultor'],
      cpf: pessoa[0]['cpf'],
      email: pessoa[0]['email'],
      celular: pessoa[0]['celular'],
      tipo: pessoa[0]['tipo'],
      idEndereco: pessoa[0]['id_endereco'],
    };
  }

  async getPessoa(): Promise<Pessoa[]> {
    return this.pessoaService.findAll().then((pessoa) => {
      console.log(`Pessoa ${pessoa}`);
      return pessoa;
    });
  }
}
