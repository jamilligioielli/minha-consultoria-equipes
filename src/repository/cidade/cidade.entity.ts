import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('CIDADE')
export class Cidade {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;
}
