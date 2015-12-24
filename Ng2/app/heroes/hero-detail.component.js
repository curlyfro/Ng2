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
var hero_service_1 = require('./hero.service');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_router, _routeParams, _service) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._service = _service;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._routeParams.get('id');
        this._service.getHero(id).then(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.gotoHeroes = function () {
        this._router.navigate(['Heroes']);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            template: "\n      <h2>HEROES</h2>\n      <div *ngIf=\"hero\">\n        <h3>\"{{hero.name}}\"</h3>\n        <div>\n          <label>Id: </label>{{hero.id}}</div>\n        <div>\n          <label>Name: </label>\n          <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n        </div>\n        <button (click)=\"gotoHeroes()\">Back</button>\n      </div>\n      ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, hero_service_1.HeroService])
    ], HeroDetailComponent);
    return HeroDetailComponent;
})();
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map