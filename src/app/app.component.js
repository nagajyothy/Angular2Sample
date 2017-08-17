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
var authentication_service_1 = require("./Service/authentication-service");
var AppComponent = (function () {
    function AppComponent(_authService) {
        var _this = this;
        this._authService = _authService;
        debugger;
        this.loggedIn = this._authService.stdLogin;
        this._authService.stdLogin.subscribe(function (res) {
            debugger;
            _this.loggedIn = res;
            console.log(_this.loggedIn);
        });
        // this._authService.totalTicketCount.subscribe(totalTicketCount => {
        //       this.loggedIn = totalTicketCount
        //   });
        //console.log(this.loggedIn);
    }
    AppComponent.prototype.ngOnInit = function () {
        //this._authService.isLogin().subscribe(res=>this.loggedIn = res);
    };
    AppComponent.prototype.logout = function () {
        debugger;
        this._authService.stdLogin.next(false);
        this._authService.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n   \n    <div class=\"container-fluid slide\">\n      <router-outlet></router-outlet>\n    </div>",
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map