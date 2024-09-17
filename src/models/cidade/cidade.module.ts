import { Module } from '@nestjs/common';
import { CidadeService } from './cidade.service';
import { DatabaseModule } from 'src/utils/database/database.module';
import { cidadeProviders } from './cidade.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...cidadeProviders, CidadeService],
  exports: [CidadeService],
})
export class CidadeModule {}
