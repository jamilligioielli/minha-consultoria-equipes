import { Module } from '@nestjs/common';
import { EquipeDataService } from './equipeData.service';
import { EquipeDataController } from './equipeData.controller';
import { EquipeModule } from 'src/models/equipe/equipe.module';

@Module({
  imports: [EquipeModule],
  controllers: [EquipeDataController],
  providers: [EquipeDataService],
})
export class EquipeDataModule {}
