import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('STATUS_EQUIPE')
export class StatusEquipe {
  @PrimaryColumn()
  id_status: number;

  @Column()
  nome_status: string;
}
