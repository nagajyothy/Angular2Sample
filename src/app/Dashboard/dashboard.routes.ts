import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {SettingsComponent} from "./settings/setting.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "../Service/authGaurd";
import { RegisterComponent } from '../Register/app.register.component';
import { StudentsListComponent } from '../Students/app.students-list.component';
import { StudentsComponent } from '../Students/app.students.component';
import { PrimeNgComponent } from "../primengExamples/primeEx.component";
import { StudetnsCurdCompoenent } from '../Students/students-curd-component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], canActivateChild:[AuthGuard], children: [
    // {path: '', redirectTo: 'admin', pathMatch: 'full'},
    {path: 'settings', component: SettingsComponent},
    {path: 'admin', component: AdminComponent},
      {
    path: 'registration',
    component: RegisterComponent,
    
  },
  {
    path: '',
    redirectTo: '/dashboard/registration',
    pathMatch: 'full',
  },
  { 
    path: 'students',
    component: StudentsListComponent,
    
  },
  {
      path:'studentsCurd/:id',
      component: StudetnsCurdCompoenent,
      canActivate: [AuthGuard]
  },
  {
     path: 'students/:id',
     component: StudentsComponent 
  },
  {
    path:'Studentdetails',
    component:StudentsComponent,
  },
  {
    path:'primeEx',
    component:PrimeNgComponent
  }
  ]
  }
];
