import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      const databaseConfig = {
        type: 'oracle',
        host: configService.get('oracle.host'),
        sid: configService.get('oracle.sid'),
        port: configService.get('oracle.port'),
        username: configService.get<string>('oracle.username'),
        password: configService.get<number>('oracle.password'),
        database: configService.get('oracle.database'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      };

      const dataSource = new DataSource(databaseConfig as DataSourceOptions);

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
