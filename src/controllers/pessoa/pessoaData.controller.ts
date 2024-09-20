import { Controller, Get, Render } from '@nestjs/common';
import { PessoaDataService } from './pessoaData.service';

@Controller('/pessoa')
export class PessoaDataController {
  constructor(private readonly pessoaDataService: PessoaDataService) {}

  @Get('/')
  @Render('layouts/pessoa/index')
  index() {
    const viewData = [];
    viewData['title'] = 'Minha Consultoria | Lider';
    return {
      viewData: viewData,
    };
  }
}
