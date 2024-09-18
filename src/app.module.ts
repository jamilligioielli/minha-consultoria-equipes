import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LiderModule } from './controllers/lider/liderData.module';
import oracleConfig from 'config/oracle.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [oracleConfig],
      isGlobal: true,
      envFilePath: '.env',
    }),
    LiderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
