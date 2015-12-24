var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var crisis_center_component_1 = require('./crisis-center/crisis-center.component');
var hero_list_component_1 = require('./heroes/hero-list.component');
var hero_detail_component_1 = require('./heroes/hero-detail.component');
var login_component_1 = require('./login/login.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n        <h1>Component Router</h1>\n        <a [routerLink]=\"['CrisisCenter']\">Crisis Center</a>\n        <a [routerLink]=\"['Heroes']\">Heroes</a>\n        <a [routerLink]=\"['Login']\">Login</a>\n        <router-outlet></router-outlet>\n      ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            {
                path: '/crisis-center/...',
                name: 'CrisisCenter',
                component: crisis_center_component_1.CrisisCenterComponent,
                useAsDefault: true
            },
            { path: '/heroes', name: 'Heroes', component: hero_list_component_1.HeroListComponent },
            { path: '/hero/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent },
            { path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] },
            { path: '/login', name: 'Login', component: login_component_1.LoginComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map