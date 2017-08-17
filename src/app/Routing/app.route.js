"use strict";
var router_1 = require("@angular/router");
var app_register_component_1 = require("../Register/app.register.component");
var app_students_component_1 = require("../Students/app.students.component");
var authGaurd_1 = require("../Service/authGaurd");
var app_home_component_1 = require("../Home/app.home.component");
var app_login_component_1 = require("../Login/app.login.component");
var students_curd_component_1 = require("../Students/students-curd-component");
// Route config let's you map routes to components
var routes = [
    // map '/persons' to the people list component
    {
        path: 'registration',
        component: app_register_component_1.RegisterComponent,
    },
    // map '/' to '/persons' as our default route
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
        canActivate: [authGaurd_1.AuthGuard]
    },
    // { 
    //   path: 'students',
    //   component: StudentsListComponent,
    //   canActivate: [AuthGuard]
    // },
    // {
    //   path:'Studentdetails',
    //   component:StudentsComponent,
    //   canActivate: [AuthGuard]
    // },
    {
        path: 'students/:id',
        component: app_students_component_1.StudentsComponent
    },
    {
        path: 'studentsCurd/:id',
        component: students_curd_component_1.StudetnsCurdCompoenent,
        canActivate: [authGaurd_1.AuthGuard]
    },
    {
        path: 'home',
        component: app_home_component_1.HomeComponent,
        canActivate: [authGaurd_1.AuthGuard]
    },
    {
        path: 'login',
        component: app_login_component_1.LoginComponent
    },
];
exports.appRouterModule = router_1.RouterModule.forRoot(routes, { enableTracing: true });
//# sourceMappingURL=app.route.js.map