import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('CONSULTOR')
export class Consultor {
  @PrimaryColumn()
  codigo_consultor: number;

  @Column()
  id_consultor: number;
  link_espaco_digital: string;
  id_equipe: number;
  id_nivel: string;
}
