import { Module } from '@nestjs/common';
import { PessoaDataService } from './pessoaData.service';
import { PessoaDataController } from './pessoaData.controller';
import { PessoaModule } from 'src/models/pessoa/pessoa.module';

@Module({
  imports: [PessoaModule],
  controllers: [PessoaDataController],
  providers: [PessoaDataService],
})
export class PessoaDataModule {}
