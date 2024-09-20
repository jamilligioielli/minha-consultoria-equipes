import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('NIVEL')
export class Nivel {
  @PrimaryColumn()
  id_nivel: number;

  @Column()
  nome_nivel: string;
  pontuacao_minima: number;
  pontuacao_maxima: number;
}
