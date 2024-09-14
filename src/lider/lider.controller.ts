import { Controller, Get, Render } from '@nestjs/common';

@Controller('/lider')
export class LiderController {
  @Get('/')
  @Render('lider/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Minha Consultoria | Equipes';
    return {
      viewData: viewData,
    };
  }
}
