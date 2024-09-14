import { Controller, Get, Render } from '@nestjs/common';

@Controller('/lider')
export class LiderController {
  constructor() {}

  @Get('/')
  @Render('layouts/lider/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Minha Consultoria | Lider';
    return {
      viewData: viewData,
    };
  }
}
