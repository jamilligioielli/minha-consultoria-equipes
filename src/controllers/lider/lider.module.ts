import { Module } from '@nestjs/common';
import { LiderController } from './lider.controller';
import { LiderService } from './lider.service';
import { CidadeModule } from 'src/models/cidade/cidade.module';

@Module({
  imports: [CidadeModule],
  controllers: [LiderController],
  providers: [LiderService],
})
export class LiderModule {}
