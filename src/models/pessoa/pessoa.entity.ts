import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('PESSOA')
export class Pessoa {
  @PrimaryColumn()
  id_consultor: number;

  @Column()
  nome: string;
  cpf: string;
  email: string;
  celular: string;
  tipo: string;
  id_endereco: number;
}
