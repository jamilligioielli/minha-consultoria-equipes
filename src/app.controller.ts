import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/')
  @Render('index')
  index() {
    const viewData = [];
    viewData['title'] = 'Minha Consultoria | Equipes';
    return {
      message: this.getHello(),
    };
  }
}
