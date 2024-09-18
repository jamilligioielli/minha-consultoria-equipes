import { DataSource } from 'typeorm';
import { StatusEquipe } from './statusEquipe.entity';

export const statusEquipeProviders = [
  {
    provide: 'STATUS_EQUIPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(StatusEquipe),
    inject: ['DATA_SOURCE'],
  },
];
