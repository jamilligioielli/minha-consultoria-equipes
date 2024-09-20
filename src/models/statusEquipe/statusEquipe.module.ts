import { Module } from '@nestjs/common';
import { StatusEquipeService } from './statusEquipe.service';
import { statusEquipeProviders } from './statusEquipe.provider';
import { DatabaseModule } from 'src/utils/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...statusEquipeProviders, StatusEquipeService],
  exports: [StatusEquipeService],
})
export class StatusEquipeModule {}
