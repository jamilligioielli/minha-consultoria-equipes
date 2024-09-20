import { Module } from '@nestjs/common';
import { ConsultorService } from './consultor.service';
import { DatabaseModule } from 'src/utils/database/database.module';
import { consultorProviders } from './consultor.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...consultorProviders, ConsultorService],
  exports: [ConsultorService],
})
export class ConsultorModule {}
