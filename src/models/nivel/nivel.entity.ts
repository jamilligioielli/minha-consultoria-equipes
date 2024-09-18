import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('LIDER')
export class Lider {
  @PrimaryColumn()
  id_lider: number;

  @Column()
  id_consultor: string;
}
