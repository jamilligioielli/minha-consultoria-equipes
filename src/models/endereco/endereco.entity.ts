import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('ENDERECO')
export class Endereco {
  @PrimaryColumn()
  id_endereco: number;

  @Column()
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
}
