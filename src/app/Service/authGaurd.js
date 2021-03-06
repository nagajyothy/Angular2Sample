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
var authentication_service_1 = require("./authentication-service");
var AuthGuard = (function () {
    function AuthGuard(router, _authService) {
        this.router = router;
        this._authService = _authService;
        //this._authService.stdLogin.subscribe(test=>console.log(this.isLogin));
    }
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canActivate = function (route, state) {
        debugger;
        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     return true;
        // }
        //  this._authService.stdLogin.subscribe(bool => {
        //      console.log(bool);
        //      this.isLogin= bool});
        // this._authService.stdLogin.subscribe(test=>this.isLogin);
        if (localStorage.getItem('currentUser')) {
            //if(this.isLogin){
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthGuard.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AuthenticationService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=authGaurd.js.map