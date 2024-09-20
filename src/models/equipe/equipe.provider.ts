import { DataSource } from 'typeorm';
import { Equipe } from './equipe.entity';

export const equipeProviders = [
  {
    provide: 'EQUIPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Equipe),
    inject: ['DATA_SOURCE'],
  },
];
