import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Consultor } from './consultor.entity';

@Injectable()
export class ConsultorService {
  constructor(
    @Inject('CONSULTOR_REPOSITORY')
    private consultorRepository: Repository<Consultor>,
  ) {}
  createConsultor(idConsultor: string, idEquipe: number, idNivel: string, linkEspacoDigital?: string): void {
    this.consultorRepository.query(`INSERT CONSULTOR (id_consultor, link_espaco_digital, id_equipe, id_nivel) VALUES (${idConsultor}, ${linkEspacoDigital}, ${idEquipe}, ${idNivel})`);
    console.log("Consultor inserida com sucesso");
  }

  async findAll(): Promise<Consultor[]> {
    return this.consultorRepository.query('SELECT * FROM CONSULTOR');
  }
}
