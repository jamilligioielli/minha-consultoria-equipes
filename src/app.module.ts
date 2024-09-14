/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiderModule } from './lider/lider.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import oracleConfig from 'config/oracle.config';

// const dbConfig = oracleConfig as TypeOrmModuleOptions;

// quando tiver entidades, adicionar em TypeOrmModule.forFeature([Entidade1, Entidade2])
@Module({
  imports: [
    LiderModule,
    /** TypeOrmModule.forRoot(dbConfig), TypeOrmModule.forFeature([]) */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
