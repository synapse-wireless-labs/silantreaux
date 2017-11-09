import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from 'synapse/jinjur/app.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);