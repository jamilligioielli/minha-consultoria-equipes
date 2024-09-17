import { DataSource } from 'typeorm';
import { Consultor } from './consultor.entity';

export const consultorProviders = [
  {
    provide: 'CONSULTOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Consultor),
    inject: ['DATA_SOURCE'],
  },
];
