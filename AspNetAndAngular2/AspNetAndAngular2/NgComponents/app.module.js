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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var system_service_1 = require("./Services/system.service");
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var system_component_1 = require('./System/system.component');
var multiselect_component_1 = require("./Components/multiselect.component");
var workflowContainer_component_1 = require("./Components/workflowContainer.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [app_component_1.AppComponent, system_component_1.SystemComponent,
                multiselect_component_1.MultiSelectComponent,
                workflowContainer_component_1.WorkflowContainerComponent, WorkflowItemComponent],
            providers: [system_service_1.SystemService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map