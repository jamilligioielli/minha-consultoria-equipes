import { Controller, Get, Render } from '@nestjs/common';
import { LiderDataService } from './liderData.service';


@Controller('/lider')
export class LiderController {
  constructor(private readonly liderDataService: LiderDataService) {}

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
