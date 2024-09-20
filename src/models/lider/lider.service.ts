import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Lider } from './lider.entity';

@Injectable()
export class LiderService {
  constructor(
    @Inject('LIDER_REPOSITORY')
    private liderRepository: Repository<Lider>,
  ) {}

  async createLider(idLider: number, idConsultor: number): Promise<Lider[]> {
    return this.liderRepository.query(
      `INSERT INTO LIDER (id_lider, id_consultor) VALUES (${idLider}, ${idConsultor})`,
    );
  }

  async findAll(): Promise<Lider[]> {
    return this.liderRepository.query('SELECT * FROM LIDER');
  }

  async findById(idLider: number): Promise<Lider> {
    return this.liderRepository.query(
      `SELECT * FROM LIDER WHERE id_lider = ${idLider}`,
    );
  }
}
