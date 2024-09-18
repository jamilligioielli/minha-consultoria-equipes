import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { StatusEquipe } from './statusEquipe.entity';

@Injectable()
export class StatusEquipeService {
  constructor(
    @Inject('STATUS_EQUIPE_REPOSITORY')
    private statusEquipeRepository: Repository<StatusEquipe>,
  ) {}

  createEquipe(nomeStatus: string): void {
    this.statusEquipeRepository.query(`INSERT STATUS_EQUIPE (nomeStatus) VALUES (${nomeStatus})`);
    console.log("Status inserido com sucesso");
  }

  async findAll(): Promise<StatusEquipe[]> {
    return this.statusEquipeRepository.query('SELECT * FROM STATUS_EQUIPE');
  }
}
