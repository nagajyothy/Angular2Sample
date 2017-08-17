import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { RegisterComponent }   from './Register/app.register.component';
import {StudentsComponent} from './Students/app.students.component';
import { appRouterModule } from './Routing/app.route';
import { HttpModule } from '@angular/http';
import { StudentsListComponent } from './Students/app.students-list.component';
import { AuthGuard } from './Service/authGaurd';
import { LoginComponent } from './Login/app.login.component';
import { HomeComponent } from './Home/app.home.component';
import {StudetnsCurdCompoenent } from './Students/students-curd-component';
import {InputTextModule, ButtonModule, ConfirmDialogModule,ConfirmationService,AutoCompleteModule,GrowlModule} from 'primeng/primeng';
import {DashboardModule} from "./Dashboard/dashboard.module";
import {DashboardComponent} from './Dashboard/dashboard.component';
// import {  NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import {PrimeNgComponent} from './primengExamples/primeEx.component';
import { AuthenticationService } from './Service/authentication-service';
import { SpinnerComponent } from './Spinner/spinnerEx.component';
@NgModule({
  imports:      [ BrowserModule,appRouterModule,FormsModule,HttpModule,ConfirmDialogModule,AutoCompleteModule,GrowlModule,DashboardModule,BrowserAnimationsModule],//NoopAnimationsModule],//BrowserAnimationsModule ],
  declarations: [ AppComponent ,RegisterComponent,StudentsComponent,StudentsListComponent,LoginComponent,HomeComponent,StudetnsCurdCompoenent,PrimeNgComponent,SpinnerComponent ],
  bootstrap:    [ AppComponent ],
  providers:[AuthGuard,ConfirmationService,AuthenticationService]
})
export class AppModule { }
