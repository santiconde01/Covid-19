import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import 'anychart/dist/js/anychart-base.min.js';
import 'anychart/dist/js/anychart-ui.min.js';
import 'anychart/dist/js/anychart-map.min.js';
import 'anychart/dist/js/anychart-data-adapter.min';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
