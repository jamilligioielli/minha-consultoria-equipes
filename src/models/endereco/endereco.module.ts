import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { enderecoProviders } from './endereco.provider';
import { DatabaseModule } from 'src/utils/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...enderecoProviders, EnderecoService],
  exports: [EnderecoService],
})
export class EnderecoModule {}
