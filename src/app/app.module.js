"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_register_component_1 = require("./Register/app.register.component");
var app_students_component_1 = require("./Students/app.students.component");
var app_route_1 = require("./Routing/app.route");
var http_1 = require("@angular/http");
var app_students_list_component_1 = require("./Students/app.students-list.component");
var authGaurd_1 = require("./Service/authGaurd");
var app_login_component_1 = require("./Login/app.login.component");
var app_home_component_1 = require("./Home/app.home.component");
var students_curd_component_1 = require("./Students/students-curd-component");
var primeng_1 = require("primeng/primeng");
var dashboard_module_1 = require("./Dashboard/dashboard.module");
// import {  NoopAnimationsModule } from '@angular/platform-browser/animations';
var animations_1 = require("@angular/platform-browser/animations");
var primeEx_component_1 = require("./primengExamples/primeEx.component");
var authentication_service_1 = require("./Service/authentication-service");
var spinnerEx_component_1 = require("./Spinner/spinnerEx.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_route_1.appRouterModule, forms_1.FormsModule, http_1.HttpModule, primeng_1.ConfirmDialogModule, primeng_1.AutoCompleteModule, primeng_1.GrowlModule, dashboard_module_1.DashboardModule, animations_1.BrowserAnimationsModule],
        declarations: [app_component_1.AppComponent, app_register_component_1.RegisterComponent, app_students_component_1.StudentsComponent, app_students_list_component_1.StudentsListComponent, app_login_component_1.LoginComponent, app_home_component_1.HomeComponent, students_curd_component_1.StudetnsCurdCompoenent, primeEx_component_1.PrimeNgComponent, spinnerEx_component_1.SpinnerComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [authGaurd_1.AuthGuard, primeng_1.ConfirmationService, authentication_service_1.AuthenticationService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map