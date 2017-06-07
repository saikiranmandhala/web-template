"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var primeng_1 = require("primeng/primeng");
var app_topbar_component_1 = require("./app-topbar/app-topbar.component");
var app_menu_component_1 = require("./app-menu/app-menu.component");
// import { AppMenuComponent } from './my-menu/my-menu.component';
var app_sub_menu_component_1 = require("./app-sub-menu/app-sub-menu.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, forms_1.FormsModule,
            primeng_1.InputTextareaModule, primeng_1.RadioButtonModule, primeng_1.InputSwitchModule, primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.MenuModule, primeng_1.SplitButtonModule,
            primeng_1.CheckboxModule, primeng_1.AutoCompleteModule, primeng_1.DropdownModule, primeng_1.PasswordModule, primeng_1.MultiSelectModule, primeng_1.SpinnerModule, primeng_1.SliderModule,
            primeng_1.CalendarModule, primeng_1.ListboxModule, primeng_1.RatingModule, primeng_1.ChipsModule, primeng_1.EditorModule, primeng_1.SharedModule, primeng_1.SelectButtonModule, primeng_1.ToggleButtonModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [app_component_1.AppComponent, app_topbar_component_1.AppTopbarComponent, app_menu_component_1.AppMenuComponent, app_sub_menu_component_1.AppSubMenuComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map