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
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_detail_component_1 = require('./crisis-detail.component');
var crisis_service_1 = require('./crisis.service');
var CrisisCenterComponent = (function () {
    function CrisisCenterComponent() {
    }
    CrisisCenterComponent = __decorate([
        core_1.Component({
            template: "\n        <h2>CRISIS CENTER</h2>\n        <router-outlet></router-outlet>\n      ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [crisis_service_1.CrisisService]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'CrisisCenter', component: crisis_list_component_1.CrisisListComponent, useAsDefault: true },
            { path: '/:id', name: 'CrisisDetail', component: crisis_detail_component_1.CrisisDetailComponent },
            { path: '/list/:id', name: 'CrisisList', component: crisis_list_component_1.CrisisListComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], CrisisCenterComponent);
    return CrisisCenterComponent;
})();
exports.CrisisCenterComponent = CrisisCenterComponent;
//# sourceMappingURL=crisis-center.component.js.map