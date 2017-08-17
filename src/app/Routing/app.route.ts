import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RegisterComponent }   from '../Register/app.register.component';
import {StudentsComponent} from '../Students/app.students.component';
import {StudentsListComponent} from '../Students/app.students-list.component';
import { AuthGuard } from '../Service/authGaurd';
import { HomeComponent } from '../Home/app.home.component';
import { LoginComponent} from '../Login/app.login.component';
import {StudetnsCurdCompoenent} from '../Students/students-curd-component';
//for primeng examples
import {PrimeNgComponent} from '../primengExamples/primeEx.component';
// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'registration',
    component: RegisterComponent,
    
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
     canActivate: [AuthGuard]
  },
  // { 
  //   path: 'students',
  //   component: StudentsListComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path:'Studentdetails',
  //   component:StudentsComponent,
  //   canActivate: [AuthGuard]
  // },
  {
     path: 'students/:id',
     component: StudentsComponent 
  },
  {
      path:'studentsCurd/:id',
      component: StudetnsCurdCompoenent,
      canActivate: [AuthGuard]
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'primeEx',
  //   component:PrimeNgComponent
  // }

];

export const appRouterModule = RouterModule.forRoot(routes,{enableTracing: true});