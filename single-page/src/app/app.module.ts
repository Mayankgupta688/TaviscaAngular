import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import EmployeeGuard from './gaurds/employee.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "help", component: HelpComponent},
  {path: "about/:empId", component: AboutComponent, canActivate: [EmployeeGuard]},
  {path: "", component: HomeComponent},
];

@NgModule({
  providers: [
    EmployeeGuard
  ],
  declarations: [
    HomeComponent,
    HelpComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [
    MainComponent
  ]
})
export class AppModule { }
