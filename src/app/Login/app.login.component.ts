import { Component } from '@angular/core';
import { User } from '../Service/user';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../Service/authentication-service';
import { Router } from '@angular/router';

@Component({
    selector:'Login',
    templateUrl:'./app.login.component.html',
    providers:[AuthenticationService]

})

export class LoginComponent {
    userId:string="jyothy";
    password:string='jyothy';
    errorMessage:string;
    constructor(private _router: Router,private _service:AuthenticationService) {
        if(localStorage.getItem("currentUser"))
        {
            this._router.navigate(['/dashboard']);
        }
     }
    login(userObj:NgForm)
    {
        debugger;


    //    if(!this._service.login(new User(this.userId,this.password)))
    //    {    
    //        this.errorMessage = 'plaese enter correct userid and password';

    //    }
     if(!this._service.checkLogin(new User(this.userId,this.password)))
       {    
            this._service.stdLogin.next(true);
           this.errorMessage = 'plaese enter correct userid and password';

       }

    }

} 