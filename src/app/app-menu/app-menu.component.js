"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var app_component_1 = require("../app.component");
var AppMenuComponent = (function () {
    function AppMenuComponent(app) {
        this.app = app;
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        this.model = [
            { label: 'Dashboard', icon: 'dashboard', routerLink: ['/'] },
            {
                label: 'Intake & LogCase', icon: 'list',
                items: [
                    { label: 'Log Case', icon: 'desktop_mac', routerLink: ['/forms'] },
                    { label: 'Log Case CC', icon: 'input', routerLink: ['/forms'] }
                ]
            },
            { label: 'Utils', icon: 'build', routerLink: ['/utils'] },
            { label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation'] },
            {
                label: 'Template Pages', icon: 'get_app',
                items: [
                    { label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty'] },
                    { label: 'Landing Page', icon: 'flight_land', url: 'landing.html' },
                    { label: 'Login Page', icon: 'verified_user', url: 'login.html' },
                    { label: 'Error Page', icon: 'error', url: 'error.html' },
                    { label: '404 Page', icon: 'error_outline', url: '404.html' },
                    { label: 'Access Denied Page', icon: 'security', url: 'access.html' }
                ]
            }
        ];
    };
    return AppMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AppMenuComponent.prototype, "reset", void 0);
AppMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-menu',
        //templateUrl: './app-menu.component.html',
        template: "\n    <ul class=\"ultima-menu ultima-main-menu clearfix\">\n        <app-submenu [item]=\"model\" root=\"true\" class=\"ultima-menu clearfix\"></app-submenu>\n    </ul>\n    ",
        styleUrls: ['./app-menu.component.css']
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return app_component_1.AppComponent; }))),
    __metadata("design:paramtypes", [app_component_1.AppComponent])
], AppMenuComponent);
exports.AppMenuComponent = AppMenuComponent;
//# sourceMappingURL=app-menu.component.js.map