import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @Inject('PESSOA_REPOSITORY')
    private pessoaRepository: Repository<Pessoa>,
  ) {}
  
  async createPessoa(nome: string, cpf: string, email: string, celular: string, tipo: string, idEndereco: number): Promise<Pessoa[]> {
    return this.pessoaRepository.query(`INSERT INTO PESSOA (nome, cpf, email, celular, tipo, id_endereco) VALUES ('${nome}', '${cpf}', '${email}', '${celular}', '${tipo}', ${idEndereco})`);
  }

  async findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.query('SELECT * FROM PESSOA');
  }

  async findById(idConsultor: number): Promise<Pessoa> {
    return this.pessoaRepository.query(`SELECT * FROM PESSOA WHERE id_pessoa = ${idConsultor}`);
  }
}
