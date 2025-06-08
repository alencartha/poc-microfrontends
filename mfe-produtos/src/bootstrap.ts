import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Produtos } from './app/produtos/produtos';

bootstrapApplication(Produtos, appConfig)
  .catch((err) => console.error(err));
