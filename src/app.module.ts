import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LiderModule } from './modules/lider/lider.module';
import oracleConfig from 'config/oracle.config';
import { CidadeModule } from './repository/cidade/cidade.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [oracleConfig],
      isGlobal: true,
      envFilePath: '.env',
    }),
    LiderModule,
    CidadeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
