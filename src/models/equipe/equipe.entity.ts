import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('EQUIPE')
export class Equipe {
  @PrimaryColumn()
  id_equipe: number;

  @Column()
  nome_equipe: string;
  link_grupo_bate_papo: string;
  valor_bonus_total_ciclo: number;
  valor_bonus_estimado_ciclo: number;
  id_status: number;
  id_lider: number;
  id_consultor: number;
}
