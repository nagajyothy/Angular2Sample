import { NgIf } from '@angular/common/src/directives/ng_if';
import { Component, style,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms' 
import { AuthenticationService } from './Service/authentication-service';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  template: `
   
    <div class="container-fluid slide">
      <router-outlet></router-outlet>
    </div>`,
    providers:[AuthenticationService]
  
  
})
export class AppComponent implements OnInit {

    loggedIn : any;
  constructor(private _authService : AuthenticationService){
    debugger;
    this.loggedIn = this._authService.stdLogin;
     this._authService.stdLogin.subscribe(res=>{
       debugger;
       this.loggedIn = res
      console.log(this.loggedIn);
    });
  // this._authService.totalTicketCount.subscribe(totalTicketCount => {
  //       this.loggedIn = totalTicketCount

  //   });
  //console.log(this.loggedIn);
}

ngOnInit() {
  
      //this._authService.isLogin().subscribe(res=>this.loggedIn = res);
    }
  logout()
  {
    debugger;
    this._authService.stdLogin.next(false);
    this._authService.logout();
  }


 }










//================================ nav bar code ======================

// <nav class="navbar navbar-default" role="navigation">
//       <div class="container-fluid">
//         <div class="navbar-header">
//           <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
//             <span class="sr-only">Toggle navigation</span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//           </button>
//           <a class="navbar-brand" [routerLink]="['/registration']">Logo</a>
//         </div>
        
//           <ul class="nav navbar-nav">
//             <li routerLinkActive="active" *ngIf="loggedIn|async">
//               <a [routerLink]="['/registration']">Registration</a>
//             </li>
//             <li routerLinkActive="active" *ngIf="loggedIn|async" >
//               <a [routerLink]="['/students']">Students List</a>
//             </li>
//             <li routerLinkActive="active" *ngIf="loggedIn|async" >
//               <a [routerLink]="['/Studentdetails']">Students Details</a>
//             </li>
//               <li routerLinkActive="active">
//               <a [routerLink]="['/primeEx']">Prime NG Examples</a>
//               </li>  
//           </ul>  
//           <ul class="nav navbar-nav navbar-right">
//               <li routerLinkActive="active">
//               <a href="#" (click)="logout()" style="float:right"><span class="glyphicon glyphicon-log-out"></span>Log out</a>
//               </li>  
//           </ul>    
//       </div>
//     </nav>


