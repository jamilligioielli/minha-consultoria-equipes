import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import oracleConfig from 'config/oracle.config';
import { EquipeModule } from './controllers/equipe/equipe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [oracleConfig],
      isGlobal: true,
      envFilePath: '.env',
    }),
    EquipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
