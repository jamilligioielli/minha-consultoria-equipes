import { Controller, Get, Param, Render } from '@nestjs/common';
import { EquipeDataService } from './equipeData.service';

@Controller('/equipe')
export class EquipeDataController {
  constructor(private readonly equipeDataService: EquipeDataService) {}

  @Get('/:id')
  @Render('layouts/equipe/index')
  async index(@Param('id') id: number) {
    return {
      viewData: await this.equipeDataService.getViewData(id),
    };
  }
}
