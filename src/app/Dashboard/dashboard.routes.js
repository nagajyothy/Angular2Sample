"use strict";
var dashboard_component_1 = require("./dashboard.component");
var setting_component_1 = require("./settings/setting.component");
var admin_component_1 = require("./admin/admin.component");
var authGaurd_1 = require("../Service/authGaurd");
var app_register_component_1 = require("../Register/app.register.component");
var app_students_list_component_1 = require("../Students/app.students-list.component");
var app_students_component_1 = require("../Students/app.students.component");
var primeEx_component_1 = require("../primengExamples/primeEx.component");
var students_curd_component_1 = require("../Students/students-curd-component");
exports.dashboardRoutes = [
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [authGaurd_1.AuthGuard], canActivateChild: [authGaurd_1.AuthGuard], children: [
            // {path: '', redirectTo: 'admin', pathMatch: 'full'},
            { path: 'settings', component: setting_component_1.SettingsComponent },
            { path: 'admin', component: admin_component_1.AdminComponent },
            {
                path: 'registration',
                component: app_register_component_1.RegisterComponent,
            },
            {
                path: '',
                redirectTo: '/dashboard/registration',
                pathMatch: 'full',
            },
            {
                path: 'students',
                component: app_students_list_component_1.StudentsListComponent,
            },
            {
                path: 'studentsCurd/:id',
                component: students_curd_component_1.StudetnsCurdCompoenent,
                canActivate: [authGaurd_1.AuthGuard]
            },
            {
                path: 'students/:id',
                component: app_students_component_1.StudentsComponent
            },
            {
                path: 'Studentdetails',
                component: app_students_component_1.StudentsComponent,
            },
            {
                path: 'primeEx',
                component: primeEx_component_1.PrimeNgComponent
            }
        ]
    }
];
//# sourceMappingURL=dashboard.routes.js.map