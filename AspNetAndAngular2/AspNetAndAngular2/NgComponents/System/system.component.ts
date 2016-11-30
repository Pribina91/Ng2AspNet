import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { SystemService } from "../Services/system.service";
import {SystemClass} from "../ModelClasses/SystemClass";
import { NgForm } from '@angular/forms';
import { Observer } from 'rxjs/Observer';

@Component({
    moduleId: module.id,
    selector: "system-component",
    templateUrl: './system.component.html'
})

export class SystemComponent implements AfterViewInit {
    isEdit: boolean = false;
    @ViewChild('multiSelect') selectElRef: any;
    constructor(private systemService: SystemService) {
        this.obj =  new SystemClass("2", "init", "init");
    }

    myOptions = [
        { value: 1, name: "one" },
        { value: 2, name: "two" },
        { value: 3, name: "three" },
        { value: 4, name: "four" }];

    obj: SystemClass = new SystemClass("2", "init", "init");
    selectedValues = [-1];

    ngAfterViewInit() {
        this.getSystem("2");
    }
    
    update(name:string , description : string) {
        this.obj.SystemName = name;
        this.obj.Description = description;
        //this.obj.SelectedPackageId = parseInt(selId);
        
        this.systemService.updateSystem(this.obj)
            .subscribe(
            (data: any) => { this.obj = data; },
            error => console.log(error)
            );;
        return false;
    }

    changeEditMode() {
        this.isEdit = !this.isEdit;
    }

    getSystem(id: string) {
        //this.system = new SystemClass("1", "Nama", "descri");
        this.systemService.getSystem(id)
            .subscribe(
                (data:any) => { this.obj = data; },
                error => console.log('Server error')
            );
        
    }

    change(options:Element) {
        this.obj.SelectedMultiDescriptiors = Array.apply(null, options) // convert to real Array
            .filter((option: HTMLOptionElement) => option.selected)
            .map((option: HTMLOptionElement) => option.value);
    }
}