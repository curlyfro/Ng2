import { bootstrap }        from 'angular2/platform/browser'
import { FORM_PROVIDERS }   from 'angular2/common'
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS }   from 'angular2/http';

import { AppComponent }     from './app.component'
import { HeroService }      from './heroes/hero.service';
import { DialogService }    from './dialog.service';


bootstrap(
    AppComponent,
    [
        FORM_PROVIDERS,
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        HeroService,
        DialogService
    ]
);