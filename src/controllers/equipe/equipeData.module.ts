import { Module } from '@nestjs/common';
import { EquipeDataService } from './equipeData.service';
import { EquipeDataController } from './equipeData.controller';
import { EquipeModule } from 'src/models/equipe/equipe.module';
import { LiderModule } from 'src/models/lider/lider.module';
import { NivelModule } from 'src/models/nivel/nivel.module';
import { PessoaModule } from 'src/models/pessoa/pessoa.module';
import { AppService } from 'src/app.service';

@Module({
  imports: [EquipeModule, LiderModule, NivelModule, PessoaModule],
  controllers: [EquipeDataController],
  providers: [EquipeDataService, AppService],
})
export class EquipeDataModule {}
