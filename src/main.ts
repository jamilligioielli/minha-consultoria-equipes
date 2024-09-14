import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log(__dirname);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));
  app.setViewEngine('hbs');

  // app.use('/lider*', function (req, res, next) {
  //   // aqui dá para fazer o controle de acesso a cada rota depois
  //   // if (req.session.user && req.session.user.role == 'admin') {
  //   next();
  //   // } else {
  //   //   res.redirect('/');
  //   // }
  // });

  await app.listen(3000);
}
bootstrap();
