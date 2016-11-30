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
var WorkflowContainerComponent = (function () {
    function WorkflowContainerComponent() {
        this.currentIndex = 0;
        this.isCancelPossible = false;
        this.isNextPossible = false;
    }
    WorkflowContainerComponent.prototype.ngAfterContentInit = function () {
        if (this.tabs.length > 0) {
            this.isNextPossible = true;
        }
        else {
            this.isNextPossible = false;
        }
    };
    WorkflowContainerComponent.prototype.onNext = function () {
        this.currentIndex++;
        if (this.currentIndex < this.tabs.length) {
            this.isNextPossible = true;
        }
        else {
            this.isNextPossible = false;
        }
    };
    WorkflowContainerComponent.prototype.onCancel = function () {
        this.currentIndex--;
        if (this.currentIndex > 0) {
            this.isCancelPossible = true;
        }
        else {
            this.isCancelPossible = false;
        }
    };
    __decorate([
        core_1.ContentChildren('item'), 
        __metadata('design:type', core_1.QueryList)
    ], WorkflowContainerComponent.prototype, "tabs", void 0);
    WorkflowContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "workflow-containter-app",
            templateUrl: './workflowContainer.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WorkflowContainerComponent);
    return WorkflowContainerComponent;
}());
exports.WorkflowContainerComponent = WorkflowContainerComponent;
//# sourceMappingURL=workflowContainer.component.js.map