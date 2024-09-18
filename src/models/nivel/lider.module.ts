import { Module } from '@nestjs/common';
import { LiderService } from './lider.service';
import { DatabaseModule } from 'src/utils/database/database.module';
import { liderProviders } from './lider.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...liderProviders, LiderService],
  exports: [LiderService],
})
export class LiderModule {}
