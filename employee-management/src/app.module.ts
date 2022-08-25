import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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
import { EmployeeInfoComponent } from './app/components/employee-info/employee-info.component';
import { FilterEmployeeComponent } from './app/components/filter-employee/filter-employee.component';
import { AddEmployeeComponent } from './app/components/add-employee/add-employee.component';
import { UsePipeComponent } from './app/components/use-pipe/use-pipe.component';
import ConvertUnderscorePipe from "./app/pipes/convert-underscore.pipe";
import { ParentElementComponent } from './app/components/parent-element/parent-element.component';
import { ChildElementComponent } from './app/components/child-element/child-element.component';
import { ReactiveFormComponent } from './app/components/reactive-form/reactive-form.component';



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
        ApplyColorDirective,
        EmployeeInfoComponent,
        FilterEmployeeComponent,
        AddEmployeeComponent,
        UsePipeComponent,
        ConvertUnderscorePipe,
        ParentElementComponent,
        ChildElementComponent,
        ReactiveFormComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [ 
        ReactiveFormComponent
    ]
})
export default class AppModule { }