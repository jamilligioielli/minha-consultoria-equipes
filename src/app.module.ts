import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiderController } from './modules/lider/lider.controller';

@Module({
  imports: [],
  controllers: [AppController, LiderController],
  providers: [AppService],
})
export class AppModule {}
