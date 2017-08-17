import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../Service/authentication-service';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-dashboard',
  template: `

<nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" [routerLink]="['registration']">Logo</a>
        </div>
        
          <ul class="nav navbar-nav">
            <li routerLinkActive="active" >
              <a [routerLink]="['registration']">Registration</a>
            </li>
            <li routerLinkActive="active"  >
              <a [routerLink]="['students']">Students List</a>
            </li>
            <li routerLinkActive="active"  >
              <a [routerLink]="['Studentdetails']">Students Details</a>
            </li>
              <li routerLinkActive="active">
              <a [routerLink]="['primeEx']">Prime NG Examples</a>
              </li>  
          </ul>  
          <ul class="nav navbar-nav navbar-right">
              <li routerLinkActive="active">
              <a  (click)="logout()" style="float:right" href="javascript:void(0)"><span class="glyphicon glyphicon-log-out"></span>Log out</a>
              </li>  
          </ul>    
      </div>
    </nav>

<router-outlet>

</router-outlet>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(private _authService : AuthenticationService){ 
  }

  ngOnInit() {
  }
logout()
  {
    debugger;
    this._authService.stdLogin.next(false);
    this._authService.logout();
  }
}



//  <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">

//   <a class="navbar-brand" href="#">Auth Application</a>
//   <div class="collapse navbar-collapse" id="navbarText">
//     <ul class="navbar-nav mr-auto">
     
//       <li class="nav-item" routerLinkActive="active">
//         <a class="nav-link" routerLink="settings">Settings</a>
//       </li>
//       <li class="nav-item" routerLinkActive="active">
//         <a class="nav-link" routerLink="admin">Admin</a>
//       </li>
//     </ul>
//     <ul class="nav navbar-nav navbar-right">
//               <li routerLinkActive="active">
//               <a (click)="logout()" style="float:right"><span class="glyphicon glyphicon-log-out"></span>Log out</a>
//               </li>  
//           </ul> 
//   </div>
// </nav>