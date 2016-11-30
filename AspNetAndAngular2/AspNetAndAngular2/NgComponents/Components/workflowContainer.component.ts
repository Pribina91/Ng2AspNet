import { Component, ContentChildren, QueryList, AfterContentInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "workflow-containter-app",
    templateUrl: './workflowContainer.component.html'
})
export class WorkflowContainerComponent implements AfterContentInit{
    currentIndex = 0;
    isCancelPossible = false;
    isNextPossible = false;
    @ContentChildren('item') tabs: QueryList<HTMLElement>;

    ngAfterContentInit(): void {
        if (this.tabs.length > 0) {
            this.isNextPossible = true;
        } else {
            this.isNextPossible = false;
        }
    }

    onNext() {
        this.currentIndex++;
        if (this.currentIndex < this.tabs.length) {
            this.isNextPossible = true;
        } else {
            this.isNextPossible = false;
        }
    }

    onCancel() {
        this.currentIndex--;
        if (this.currentIndex > 0) {
            this.isCancelPossible = true;
        } else {
            this.isCancelPossible = false;
        }
    }
}