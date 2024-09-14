export const oracleConfig = {
  type: 'oracle',
  host: 'oracle.fiap.com.br',
  sid: 'ORCL',
  port: 1521,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'fiap',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
}