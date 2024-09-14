import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  index() {
    const viewData = [];
    viewData['title'] = 'Minha Consultoria | Equipes';
    return {
      viewData: viewData,
    };
  }
}
