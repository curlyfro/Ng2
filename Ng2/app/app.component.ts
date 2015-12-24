import { Component }                        from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES }   from 'angular2/router';

import { CrisisCenterComponent}             from './crisis-center/crisis-center.component';
import { HeroListComponent }                from './heroes/hero-list.component';
import { HeroDetailComponent }              from './heroes/hero-detail.component';
import { LoginComponent }                from './login/login.component';

@Component({
    selector: 'app',
    template: `
        <h1>Component Router</h1>
        <a [routerLink]="['CrisisCenter']">Crisis Center</a>
        <a [routerLink]="['Heroes']">Heroes</a>
        <a [routerLink]="['Login']">Login</a>
        <router-outlet></router-outlet>
      `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
        { 
            path: '/crisis-center/...',
            name: 'CrisisCenter',
            component: CrisisCenterComponent,
            useAsDefault: true
        },
        { path: '/heroes',          name: 'Heroes',         component: HeroListComponent },
        { path: '/hero/:id',        name: 'HeroDetail',     component: HeroDetailComponent },
        { path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] },

        { path: '/login', name: 'Login', component: LoginComponent }

])
export class AppComponent { }