import { DataSource } from 'typeorm';
import { Lider } from './nivel.entity';

export const liderProviders = [
  {
    provide: 'LIDER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Lider),
    inject: ['DATA_SOURCE'],
  },
];
