import { Component, ViewChild } from "@angular/core";

@Component({
    selector: 'multi-selector',
    template: `{{title}}<p>
  <select id="select" multiple (change)="change($event.target.options)">
    <option *ngFor="let item of myOptions" [value]="item.value">  {{item.name}}
    </option>
  </select>
  <p>{{selectedValues | json}}`
})
export class MultiSelectComponent {
    //@ViewChild('select') selectElRef:any;
    //title = "Angular 2 beta - multi select list";
    //myOptions = [
    //    { value: 1, name: "one" },
    //    { value: 2, name: "two" },
    //    { value: 3, name: "three" }];

    //selectedValues = ['1', '2'];
    //myModelProperty = this.myOptions[0];
    //constructor() { console.clear(); }
    //ngAfterViewInit() {
    //    this.updateSelectList();
    //}
    //updateSelectList() {
    //    let options = this.selectElRef.nativeElement.options;
    //    for (let i = 0; i < options.length; i++) {
    //        options[i].selected = this.selectedValues.indexOf(options[i].value) > -1;
    //    }
    //}
    //change(options: any) {
    //    this.selectedValues = Array.apply(null, options)  // convert to real Array
    //        .filter(option => option.selected)
    //        .map(option => option.value)
    //}
    //changeOptions() {
    //    this.selectedValues = ['1', '3'];
    //    this.updateSelectList();
    //}
}