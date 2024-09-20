import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import oracleConfig from 'config/oracle.config';
import { LiderDataModule } from './controllers/lider/liderData.module';
import { EquipeDataModule } from './controllers/equipe/equipeData.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [oracleConfig],
      isGlobal: true,
      envFilePath: '.env',
    }),
    EquipeDataModule,
    LiderDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
