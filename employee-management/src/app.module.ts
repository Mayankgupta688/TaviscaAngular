import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import HelloWorldComponent from "./app/components/hello-world/hello-world.component";
import HelloMayankComponent from "./app/components/hello-mayank/hello-mayank.component";
import AppMainComponent from "./app/components/app-main/app-main.component";
import { DataInterpolationComponent } from './app/components/data-interpolation/data-interpolation.component';
import { EmployeeDetailsComponent } from './app/components/employee-details/employee-details.component';
import { EmployeeCountComponent } from './app/components/employee-count/employee-count.component';
import { StockPriceComponent } from './app/components/stock-price/stock-price.component';
import { DynamicStyleComponent } from './app/components/dynamic-style/dynamic-style.component';
import { UseDirectivesComponent } from './app/components/use-directives/use-directives.component';
import DelayRenderingDirective from "./app/directives/delay-rendering.directive";
import ApplyColorDirective from "./app/directives/apply-color.directive";

@NgModule({
    declarations: [
        HelloWorldComponent,
        HelloMayankComponent,
        AppMainComponent,
        DataInterpolationComponent,
        EmployeeDetailsComponent,
        EmployeeCountComponent,
        StockPriceComponent,
        DynamicStyleComponent,
        UseDirectivesComponent,
        DelayRenderingDirective,
        ApplyColorDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    bootstrap: [ 
        EmployeeDetailsComponent
    ]
})
export default class AppModule { }