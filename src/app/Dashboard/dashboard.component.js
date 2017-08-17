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
var authentication_service_1 = require("../Service/authentication-service");
var DashboardComponent = (function () {
    function DashboardComponent(_authService) {
        this._authService = _authService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.logout = function () {
        debugger;
        this._authService.stdLogin.next(false);
        this._authService.logout();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        template: "\n\n<nav class=\"navbar navbar-default\" role=\"navigation\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" [routerLink]=\"['registration']\">Logo</a>\n        </div>\n        \n          <ul class=\"nav navbar-nav\">\n            <li routerLinkActive=\"active\" >\n              <a [routerLink]=\"['registration']\">Registration</a>\n            </li>\n            <li routerLinkActive=\"active\"  >\n              <a [routerLink]=\"['students']\">Students List</a>\n            </li>\n            <li routerLinkActive=\"active\"  >\n              <a [routerLink]=\"['Studentdetails']\">Students Details</a>\n            </li>\n              <li routerLinkActive=\"active\">\n              <a [routerLink]=\"['primeEx']\">Prime NG Examples</a>\n              </li>  \n          </ul>  \n          <ul class=\"nav navbar-nav navbar-right\">\n              <li routerLinkActive=\"active\">\n              <a  (click)=\"logout()\" style=\"float:right\" href=\"javascript:void(0)\"><span class=\"glyphicon glyphicon-log-out\"></span>Log out</a>\n              </li>  \n          </ul>    \n      </div>\n    </nav>\n\n<router-outlet>\n\n</router-outlet>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
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
//# sourceMappingURL=dashboard.component.js.map