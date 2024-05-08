import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



//Angular is a popular open-source web application framework developed and maintained by Google. It is written in TypeScript and is widely used for building dynamic, single-page web applications
//Angular provides a comprehensive set of tools and features for developing modern, client-side applications
