import { Controller, Get, Render } from '@nestjs/common';
import { EquipeDataService } from './equipeData.service';

@Controller('/equipe')
export class EquipeDataController {
  constructor(private readonly equipeDataService: EquipeDataService) {}

  @Get('/')
  @Render('layouts/equipe/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Minha Consultoria | Equipe';
    return {
      viewData: viewData,
    };
  }
}
