import { Module } from '@nestjs/common';
import { LiderController } from './lider.controller';
import { LiderDataService } from './liderData.service';
import { CidadeModule } from 'src/models/cidade/cidade.module';
import { LiderModule } from 'src/models/lider/lider.module';

@Module({
  imports: [LiderModule, CidadeModule],
  controllers: [LiderController],
  providers: [LiderDataService],
})
export class LiderDataModule {}
