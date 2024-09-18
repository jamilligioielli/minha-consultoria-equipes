import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Nivel } from './nivel.entity';

@Injectable()
export class NivelService {
  constructor(
    @Inject('NIVEL_REPOSITORY')
    private nivelRepository: Repository<Nivel>,
  ) {}

  createNivel(nomeNivel: string, pontuacaoMaxima: number, pontuacaoMinima: number): void {
    this.nivelRepository.query(`INSERT NIVEL (nome_nivel, pontuacao_minima, pontuacao_maxima) VALUES (${nomeNivel}, ${pontuacaoMaxima},  ${pontuacaoMinima})`);
    console.log("Nivel inserido com sucesso");
  }

  async findAll(): Promise<Nivel[]> {
    return this.nivelRepository.query('SELECT * FROM NIVEL');
  }
}
