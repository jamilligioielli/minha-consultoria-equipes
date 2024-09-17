import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { DatabaseModule } from 'src/utils/database/database.module';
import { pessoaProviders } from './pessoa.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...pessoaProviders, PessoaService],
  exports: [PessoaService],
})
export class PessoaModule {}
