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
var AppSubMenuComponent = (function () {
    function AppSubMenuComponent(domHandler) {
        this.domHandler = domHandler;
    }
    AppSubMenuComponent.prototype.ngOnInit = function () {
        // console.log(this.item);
    };
    AppSubMenuComponent.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        this.activeItem = item;
        var nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            var sublist = nextElement.children[0];
            sublist.style.zIndex = String(++domhandler_1.DomHandler.zindex);
            if (this.root) {
                sublist.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                sublist.style.left = '0px';
            }
            else {
                sublist.style.top = '0px';
                sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
            }
        }
    };
    AppSubMenuComponent.prototype.onItemMouseLeave = function (event) {
        this.activeItem = null;
    };
    AppSubMenuComponent.prototype.itemClick = function (event, item) {
        // console.log('Click Invoked');
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            if (!item.eventEmitter) {
                item.eventEmitter = new core_1.EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }
        this.activeItem = null;
    };
    AppSubMenuComponent.prototype.listClick = function (event) {
        this.activeItem = null;
    };
    return AppSubMenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AppSubMenuComponent.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AppSubMenuComponent.prototype, "root", void 0);
AppSubMenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-submenu',
        templateUrl: 'app-sub-menu.component.html',
        providers: [domhandler_1.DomHandler]
    }),
    __metadata("design:paramtypes", [domhandler_1.DomHandler])
], AppSubMenuComponent);
exports.AppSubMenuComponent = AppSubMenuComponent;
//# sourceMappingURL=app-sub-menu.component.js.map