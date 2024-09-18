import { DataSource } from 'typeorm';
import { Nivel } from './nivel.entity';

export const nivelProviders = [
  {
    provide: 'NIVEL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Nivel),
    inject: ['DATA_SOURCE'],
  },
];
