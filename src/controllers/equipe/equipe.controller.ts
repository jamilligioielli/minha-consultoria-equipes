import { Controller, Get, Render } from '@nestjs/common';
import { EquipeService } from './equipe.service';

@Controller('/equipe')
export class EquipeController {
  constructor(private readonly equipeService: EquipeService) {}

  @Get('/')
  @Render('layouts/equipe/index')
  async index() {
    return {
      viewData: await this.equipeService.getViewData(),
    };
  }
}
