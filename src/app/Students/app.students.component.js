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
//import { ROUTER_DIRECTIVES } from '@angular/router';
var router_1 = require("@angular/router");
var students_service_1 = require("../Service/students.service");
var common_1 = require("@angular/common");
var StudentsComponent = (function () {
    function StudentsComponent(studentsService, route, _location) {
        this.studentsService = studentsService;
        this.route = route;
        this._location = _location;
        this.stdEdit = false;
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.paramsSub = this.route.params.subscribe(function (params) { return _this.id = parseInt(params['id']); });
        this.stdDetails = this.studentsService.getStudent(this.id);
        this.stdEdit = false;
        // this.stdId = this.stdDetails.id;
        // this.stdName= this.stdDetails.name;
        // this.stdAge = this.stdDetails.age;
        // this.stdMail = this.stdDetails.email;
        //this.studentsService.getStudent(this.id).then(std => this.stdDetails = std);
    };
    StudentsComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    StudentsComponent.prototype.backClicked = function () {
        this._location.back();
    };
    StudentsComponent.prototype.stdSubmit = function () {
        this.stdEdit = true;
    };
    return StudentsComponent;
}());
StudentsComponent = __decorate([
    core_1.Component({
        selector: 'students',
        //template:'<h2>Students Page</h2>'
        templateUrl: './app.students.component.html',
        styleUrls: ['app/app.component.styles.css'],
        //directives: [ROUTER_DIRECTIVES]
        providers: [students_service_1.StudentsService]
    }),
    __metadata("design:paramtypes", [students_service_1.StudentsService, router_1.ActivatedRoute, common_1.Location])
], StudentsComponent);
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=app.students.component.js.map