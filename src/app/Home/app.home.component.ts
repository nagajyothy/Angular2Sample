import { Component }          from '@angular/core';
// import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from '../Service/authentication-service';
import { Observable } from 'rxjs/Rx';
@Component({
selector: 'home',
template:`<h2> Login Success Welcome To GGK </h2>
`,
 providers:[AuthenticationService]

})
export class HomeComponent
{
       loggedIn : boolean;

  constructor(private _authService : AuthenticationService){
    debugger;
   this._authService.stdLogin.subscribe(bool => this.loggedIn = bool);

}
// constructor(private confirmationService: ConfirmationService) {}

//     confirm() {
//         this.confirmationService.confirm({
//             message: 'Are you sure that you want to perform this action?',
//             accept: () => {
//                 //Actual logic to perform a confirmation
//             }
//         });
//     }
}