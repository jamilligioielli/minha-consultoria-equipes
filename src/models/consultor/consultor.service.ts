import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Consultor } from './consultor.entity';

@Injectable()
export class ConsultorService {
  constructor(
    @Inject('CONSULTOR_REPOSITORY')
    private consultorRepository: Repository<Consultor>,
  ) {}
  
  async createConsultor(idConsultor: string, idEquipe: number, idNivel: string, linkEspacoDigital?: string): Promise<Consultor[]> {
    return this.consultorRepository.query(`INSERT INTO CONSULTOR (id_consultor, link_espaco_digital, id_equipe, id_nivel) VALUES ('${idConsultor}', '${linkEspacoDigital}', ${idEquipe}, ${idNivel})`);
  }

  async findAll(): Promise<Consultor[]> {
    return this.consultorRepository.query('SELECT * FROM CONSULTOR');
  }

  async findById(idConsultor: number): Promise<Consultor[]> {
    return this.consultorRepository.query(`SELECT * FROM CONSULTOR WHERE id_consultor = ${idConsultor}`);
  }
}
