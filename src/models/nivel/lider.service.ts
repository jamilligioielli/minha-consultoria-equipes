import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lider } from './nivel.entity';

@Injectable()
export class LiderService {
  constructor(
    @Inject('LIDER_REPOSITORY')
    private liderRepository: Repository<Lider>,
  ) {}

  createLider(idLider: number, idConsultor: number): void {
    this.liderRepository.query(`INSERT LIDER (id_lider, id_consultor) VALUES (${idLider}, ${idConsultor})`);
    console.log("Insert com sucesso");
  }

  async findAll(): Promise<Lider[]> {
    return this.liderRepository.query('SELECT * FROM LIDER');
  }
}
