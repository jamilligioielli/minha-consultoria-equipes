import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Endereco } from './endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async createEndereco(cep: string, logradouro: number, numero: number, complemento?: number): Promise<Endereco[]> {
    return this.enderecoRepository.query(`INSERT INTO ENDERECO (cep, logradouro, numero, complemento) VALUES (${cep}, ${logradouro},  ${numero}, ${complemento})`);
  }

  async findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.query('SELECT * FROM ENDERECO');
  }

  async findById(idEndereco: number): Promise<Endereco[]> {
    return this.enderecoRepository.query(`SELECT * FROM ENDERECO WHERE id_equipe = ${idEndereco}`);
  }
}
