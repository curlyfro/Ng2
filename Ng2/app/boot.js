var browser_1 = require('angular2/platform/browser');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_component_1 = require('./app.component');
var hero_service_1 = require('./heroes/hero.service');
var dialog_service_1 = require('./dialog.service');
browser_1.bootstrap(app_component_1.AppComponent, [
    common_1.FORM_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    hero_service_1.HeroService,
    dialog_service_1.DialogService
]);
//# sourceMappingURL=boot.js.map