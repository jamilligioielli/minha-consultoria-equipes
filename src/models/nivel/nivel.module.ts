import { Module } from '@nestjs/common';
import { NivelService } from './nivel.service';
import { nivelProviders } from './nivel.provider';
import { DatabaseModule } from 'src/utils/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...nivelProviders, NivelService],
  exports: [NivelService],
})
export class NivelModule {}
