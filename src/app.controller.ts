import { Controller, Get, Render } from '@nestjs/common';
// import { AppService } from './app.service';
import { CidadeService } from './repository/cidade/cidade.service';

@Controller()
export class AppController {
  constructor(private readonly cidadeService: CidadeService) {}

  @Get('/')
  @Render('index')
  async index() {
    const viewData = [];
    viewData['title'] = 'Minha Consultoria | Equipes';
    viewData['cidade'] = await this.cidadeService.getCidade();
    return {
      viewData: viewData,
    };
  }
}
