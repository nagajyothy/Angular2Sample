"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("../Dashboard/dashboard.component");
var setting_component_1 = require("../Dashboard/settings/setting.component");
var admin_component_1 = require("./admin/admin.component");
var router_1 = require("@angular/router");
var dashboard_routes_1 = require("./dashboard.routes");
var authGaurd_1 = require("../Service/authGaurd");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(dashboard_routes_1.dashboardRoutes)
        ],
        declarations: [dashboard_component_1.DashboardComponent, setting_component_1.SettingsComponent, admin_component_1.AdminComponent],
        exports: [dashboard_component_1.DashboardComponent],
        providers: [authGaurd_1.AuthGuard]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map