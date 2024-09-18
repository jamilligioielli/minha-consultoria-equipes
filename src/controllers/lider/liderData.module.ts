import { Module } from '@nestjs/common';
import { LiderController } from './liderData.controller';
import { LiderDataService } from './liderData.service';
import { LiderModule } from 'src/models/lider/lider.module';

@Module({
  imports: [LiderModule],
  controllers: [LiderController],
  providers: [LiderDataService],
})
export class LiderDataModule {}
