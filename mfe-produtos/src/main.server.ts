import { bootstrapApplication } from '@angular/platform-browser';
import { Produtos } from './app/produtos/produtos';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(Produtos, config);

export default bootstrap;
