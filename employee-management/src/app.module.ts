import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import HelloWorldComponent from "./hello-world/hello-world.component";
import HelloMayankComponent from "./hello-mayank/hello-mayank.component";

import AppMainComponent from "./app-main/app-main.component";
import { DataInterpolationComponent } from './app/data-interpolation/data-interpolation.component';
import { EmployeeDetailsComponent } from './app/employee-details/employee-details.component';
import { EmployeeCountComponent } from './app/employee-count/employee-count.component';
import { StockPriceComponent } from './app/stock-price/stock-price.component';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        HelloWorldComponent,
        HelloMayankComponent,
        AppMainComponent,
        DataInterpolationComponent,
        EmployeeDetailsComponent,
        EmployeeCountComponent,
        StockPriceComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    bootstrap: [ 
        StockPriceComponent
    ]
})
export default class AppModule { }