import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import HelloWorldComponent from "./hello-world/hello-world.component";
import HelloMayankComponent from "./hello-mayank/hello-mayank.component";

import AppMainComponent from "./app-main/app-main.component";
import { DataInterpolationComponent } from './app/data-interpolation/data-interpolation.component';

@NgModule({
    declarations: [
        HelloWorldComponent,
        HelloMayankComponent,
        AppMainComponent,
        DataInterpolationComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [ 
        DataInterpolationComponent
    ]
})
export default class AppModule { }