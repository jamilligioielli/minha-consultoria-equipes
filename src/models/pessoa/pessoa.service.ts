import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @Inject('PESSOA_REPOSITORY')
    private pessoaRepository: Repository<Pessoa>,
  ) {}
  
  createPessoa(cpf: string, email: string, celular: string, tipo: string, idEndereco: number): void {
    this.pessoaRepository.query(`INSERT PESSOA (cpf, email, celular, tipo, id_endereco) VALUES (${cpf}, ${email}, ${celular}, ${tipo}, ${idEndereco})`);
    console.log("Pessoa inserida com sucesso");
  }

  async findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.query('SELECT * FROM PESSOA');
  }
}
