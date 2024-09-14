import { Module } from '@nestjs/common';
import { LiderController } from './lider.controller';

@Module({
  imports: [],
  controllers: [LiderController],
  providers: [],
})
export class LiderModule {}
