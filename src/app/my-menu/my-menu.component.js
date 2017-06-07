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
var core_1 = require("@angular/core");
var domhandler_1 = require("../dom/domhandler");
var AppMenuComponent = (function () {
    function AppMenuComponent(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.model = [
            { label: 'Dashboard2', icon: 'dashboard', routerLink: ['/'] },
            {
                label: 'Components', icon: 'list',
                items: [
                    { label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample'] },
                    { label: 'Forms', icon: 'input', routerLink: ['/forms'] },
                    { label: 'Data', icon: 'grid_on', routerLink: ['/data'] },
                    { label: 'Panels', icon: 'content_paste', routerLink: ['/panels'] },
                    { label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays'] },
                    { label: 'Menus', icon: 'menu', routerLink: ['/menus'] },
                    { label: 'Messages', icon: 'message', routerLink: ['/messages'] },
                    { label: 'Charts', icon: 'insert_chart', routerLink: ['/charts'] },
                    { label: 'File', icon: 'attach_file', routerLink: ['/file'] },
                    { label: 'Misc', icon: 'toys', routerLink: ['/misc'] }
                ]
            },
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
            },
            {
                label: 'Menu Hierarchy', icon: 'menu',
                items: [
                    {
                        label: 'Submenu 1', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'subject',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'subject' },
                                    { label: 'Submenu 1.1.2', icon: 'subject' },
                                    { label: 'Submenu 1.1.3', icon: 'subject' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'subject',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'subject' },
                                    { label: 'Submenu 1.2.2', icon: 'subject' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'subject',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'subject' },
                                    { label: 'Submenu 2.1.2', icon: 'subject' },
                                    { label: 'Submenu 2.1.3', icon: 'subject' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'subject',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'subject' },
                                    { label: 'Submenu 2.2.2', icon: 'subject' }
                                ]
                            },
                        ]
                    }
                ]
            },
            { label: 'Utils', icon: 'build', routerLink: ['/utils'] },
            { label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation'] }
        ];
    }
    AppMenuComponent.prototype.unsubscribe = function (item) {
        if (item.eventEmitter) {
            item.eventEmitter.unsubscribe();
        }
        if (item.items) {
            for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
                var childItem = _a[_i];
                this.unsubscribe(childItem);
            }
        }
    };
    AppMenuComponent.prototype.ngOnInit = function () {
        console.log(this.model);
    };
    AppMenuComponent.prototype.ngOnDestroy = function () {
        if (this.model) {
            for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
                var item = _a[_i];
                this.unsubscribe(item);
            }
        }
    };
    return AppMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AppMenuComponent.prototype, "model", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AppMenuComponent.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AppMenuComponent.prototype, "styleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AppMenuComponent.prototype, "reset", void 0);
AppMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-menu',
        templateUrl: 'my-menu.component.html',
        providers: [domhandler_1.DomHandler]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler, core_1.Renderer2])
], AppMenuComponent);
exports.AppMenuComponent = AppMenuComponent;
//# sourceMappingURL=my-menu.component.js.map