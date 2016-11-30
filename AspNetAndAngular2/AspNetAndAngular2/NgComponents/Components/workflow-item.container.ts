import { Component, ContentChildren, QueryList, AfterContentInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "workflow-item-app",
    template: '<ng-content></ng-content>'
})
export class WorkflowItemComponent {
    public title = "";
}