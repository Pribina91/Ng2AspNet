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
var system_service_1 = require("../Services/system.service");
var SystemClass_1 = require("../ModelClasses/SystemClass");
var SystemComponent = (function () {
    function SystemComponent(systemService) {
        this.systemService = systemService;
        this.isEdit = false;
        this.myOptions = [
            { value: 1, name: "one" },
            { value: 2, name: "two" },
            { value: 3, name: "three" },
            { value: 4, name: "four" }];
        this.obj = new SystemClass_1.SystemClass("2", "init", "init");
        this.selectedValues = [-1];
        this.obj = new SystemClass_1.SystemClass("2", "init", "init");
    }
    SystemComponent.prototype.ngAfterViewInit = function () {
        this.getSystem("2");
    };
    SystemComponent.prototype.update = function (name, description) {
        var _this = this;
        this.obj.SystemName = name;
        this.obj.Description = description;
        //this.obj.SelectedPackageId = parseInt(selId);
        this.systemService.updateSystem(this.obj)
            .subscribe(function (data) { _this.obj = data; }, function (error) { return console.log(error); });
        ;
        return false;
    };
    SystemComponent.prototype.changeEditMode = function () {
        this.isEdit = !this.isEdit;
    };
    SystemComponent.prototype.getSystem = function (id) {
        var _this = this;
        //this.system = new SystemClass("1", "Nama", "descri");
        this.systemService.getSystem(id)
            .subscribe(function (data) { _this.obj = data; }, function (error) { return console.log('Server error'); });
    };
    SystemComponent.prototype.change = function (options) {
        this.obj.SelectedMultiDescriptiors = Array.apply(null, options) // convert to real Array
            .filter(function (option) { return option.selected; })
            .map(function (option) { return option.value; });
    };
    __decorate([
        core_1.ViewChild('multiSelect'), 
        __metadata('design:type', Object)
    ], SystemComponent.prototype, "selectElRef", void 0);
    SystemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "system-component",
            templateUrl: './system.component.html'
        }), 
        __metadata('design:paramtypes', [system_service_1.SystemService])
    ], SystemComponent);
    return SystemComponent;
}());
exports.SystemComponent = SystemComponent;
//# sourceMappingURL=system.component.js.map