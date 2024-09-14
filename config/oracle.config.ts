import { registerAs } from '@nestjs/config';

export default registerAs('oracle', () => ({
  type: 'oracle',
  host: 'oracle.fiap.com.br',
  sid: 'ORCL',
  port: 1521,
  username: process.env.DB_USERNAME || 'rm552414',
  password: process.env.DB_PASSWORD || '020104',
  database: 'fiap',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
}));
