import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Nivel } from './nivel.entity';

@Injectable()
export class NivelService {
  constructor(
    @Inject('NIVEL_REPOSITORY')
    private nivelRepository: Repository<Nivel>,
  ) {}

  async createNivel(
    nomeNivel: string,
    pontuacaoMaxima: number,
    pontuacaoMinima: number,
  ): Promise<Nivel[]> {
    return this.nivelRepository.query(
      `INSERT INTO NIVEL (nome_nivel, pontuacao_minima, pontuacao_maxima) VALUES ('${nomeNivel}', ${pontuacaoMaxima},  ${pontuacaoMinima})`,
    );
  }

  async findAll(): Promise<Nivel[]> {
    return this.nivelRepository.query('SELECT * FROM NIVEL');
  }

  async findById(idNivel: number): Promise<Nivel> {
    return this.nivelRepository.query(
      `SELECT * FROM NIVEL WHERE id_nivel = ${idNivel}`,
    );
  }
}
