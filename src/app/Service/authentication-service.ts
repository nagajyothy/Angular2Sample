import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { UsersList } from './login-user-list';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './user'
import { BehaviorSubject } from "rxjs/BehaviorSubject";
@Injectable()
export class AuthenticationService{
private loggedIn = false;
    constructor(private _router: Router){
    }
    isLogined:boolean;
     public stdLogin = new BehaviorSubject<boolean>(false);
    //  stdLogin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // userList:UsersList;
    login(user:User){
        debugger;
    var authenticatedUser = UsersList.find(u => u.userId === user.userId);
    if (authenticatedUser && authenticatedUser.password === user.password){
    //   localStorage.setItem("currentUser", JSON.stringify(authenticatedUser));
    this.stdLogin.next(true);    
      localStorage.setItem("currentUser", authenticatedUser.userId);    
    this.loggedIn = true;
     this._router.navigate(['/home']);  
      return true;
    }
    else
    {
    return false;
    }
 
  }
isLogin(): Observable<any> {
        return this.stdLogin.asObservable();
    }

  // isLogin()
  // {
  //   debugger;
  //  // return this.stdLogin;
  //   this.stdLogin.subscribe(bool => this.isLogined = bool);
  //  return  this.isLogined == true ?  true: false;
  //    //this.stdLogin.subscribe(bool => this.isLogined = bool);
  //   //return this.isLogined;
  //   // if(this.stdLogin){
  //   //   return true;
  //   // }
  //   // else{
  //   //   return false;
  //   // }
  // }
  checkLogin(user:User){
    debugger;
    var authenticatedUser = UsersList.find(u => u.userId === user.userId);
    if (authenticatedUser && authenticatedUser.password === user.password){
       this.stdLogin.next(true);
       this.stdLogin.subscribe(bool => console.log("caching behavior value:"+bool));
        localStorage.setItem("currentUser", authenticatedUser.userId);    
       this._router.navigate(['/dashboard']);
     //this._router.navigate(['/home']);  
       return true;
    }
    else{
       this.stdLogin.next(false);
       return false;
    }
  }
   logout() {
       debugger;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        
        this.stdLogin.next(false);
        this._router.navigate(['/login']); 
    }
    isLoggedIn() {
    return this.loggedIn;
  }
}

