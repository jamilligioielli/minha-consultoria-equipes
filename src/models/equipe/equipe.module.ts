import { Module } from '@nestjs/common';
import { EquipeService } from './equipe.service';
import { DatabaseModule } from 'src/utils/database/database.module';
import { equipeProviders } from './equipe.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...equipeProviders, EquipeService],
  exports: [EquipeService],
})
export class EquipeModule {}
