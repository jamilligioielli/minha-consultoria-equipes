import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cidade } from './cidade.entity';

@Injectable()
export class CidadeService {
  constructor(
    @Inject('CIDADE_REPOSITORY')
    private cidadeRepository: Repository<Cidade>,
  ) {}

  async findAll(): Promise<Cidade[]> {
    return this.cidadeRepository.query('SELECT * FROM CIDADE');
  }

  async getCidade(): Promise<string> {
    let a = '';
    await this.findAll().then((cidade) => {
      a = cidade[0]['NOME'];
      console.log(cidade);
      return a;
    });

    return a;
  }
}
