import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SystemService } from "./Services/system.service";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SystemComponent }  from './System/system.component';
import { MultiSelectComponent } from "./Components/multiselect.component";
import { WorkflowContainerComponent } from "./Components/workflowContainer.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [AppComponent, SystemComponent,
        MultiSelectComponent,
        WorkflowContainerComponent, WorkflowItemComponent],
  providers: [ SystemService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
