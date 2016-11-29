import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SystemService } from "./Services/system.service";
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SystemComponent }  from './System/system.component';
import { MultiSelectComponent } from "./Components/multiselect.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [AppComponent, SystemComponent, MultiSelectComponent],
  providers: [SystemService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
