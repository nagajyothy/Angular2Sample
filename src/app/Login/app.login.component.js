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
var user_1 = require("../Service/user");
var authentication_service_1 = require("../Service/authentication-service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(_router, _service) {
        this._router = _router;
        this._service = _service;
        this.userId = "jyothy";
        this.password = 'jyothy';
        if (localStorage.getItem("currentUser")) {
            this._router.navigate(['/dashboard']);
        }
    }
    LoginComponent.prototype.login = function (userObj) {
        debugger;
        //    if(!this._service.login(new User(this.userId,this.password)))
        //    {    
        //        this.errorMessage = 'plaese enter correct userid and password';
        //    }
        if (!this._service.checkLogin(new user_1.User(this.userId, this.password))) {
            this._service.stdLogin.next(true);
            this.errorMessage = 'plaese enter correct userid and password';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'Login',
        templateUrl: './app.login.component.html',
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=app.login.component.js.map