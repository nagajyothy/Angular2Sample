"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_user_list_1 = require("./login-user-list");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AuthenticationService = (function () {
    function AuthenticationService(_router) {
        this._router = _router;
        this.loggedIn = false;
        this.stdLogin = new BehaviorSubject_1.BehaviorSubject(false);
    }
    //  stdLogin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // userList:UsersList;
    AuthenticationService.prototype.login = function (user) {
        debugger;
        var authenticatedUser = login_user_list_1.UsersList.find(function (u) { return u.userId === user.userId; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            //   localStorage.setItem("currentUser", JSON.stringify(authenticatedUser));
            this.stdLogin.next(true);
            localStorage.setItem("currentUser", authenticatedUser.userId);
            this.loggedIn = true;
            this._router.navigate(['/home']);
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isLogin = function () {
        return this.stdLogin.asObservable();
    };
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
    AuthenticationService.prototype.checkLogin = function (user) {
        debugger;
        var authenticatedUser = login_user_list_1.UsersList.find(function (u) { return u.userId === user.userId; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            this.stdLogin.next(true);
            this.stdLogin.subscribe(function (bool) { return console.log("caching behavior value:" + bool); });
            localStorage.setItem("currentUser", authenticatedUser.userId);
            this._router.navigate(['/dashboard']);
            //this._router.navigate(['/home']);  
            return true;
        }
        else {
            this.stdLogin.next(false);
            return false;
        }
    };
    AuthenticationService.prototype.logout = function () {
        debugger;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.stdLogin.next(false);
        this._router.navigate(['/login']);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication-service.js.map