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
var students_service_1 = require("../Service/students.service");
var router_1 = require("@angular/router");
var students_curd_service_1 = require("../Service/students-curd-service");
var StudentsListComponent = (function () {
    function StudentsListComponent(_studentsService, router) {
        this._studentsService = _studentsService;
        this.router = router;
        this.test = 'nagajyothy';
        debugger;
        this.refresh();
        // _studentsService.getStudents() //We get an Observable<Array> object returned.
        //  .subscribe(std => this.stdList = std);
        //_studentsService.getStudents().then(std=>this.stdList = std); //when you use prmoise
    }
    StudentsListComponent.prototype.getstdDet = function (stdobj) {
        debugger;
        this.router.navigate(['/dashboard/studentsCurd', stdobj.id]);
        //this.router.navigate([ '/students' , stdobj.id]);
    };
    StudentsListComponent.prototype.editStudent = function (stdId) {
        this.router.navigate(['/dashboard/studentsCurd', stdId]);
    };
    StudentsListComponent.prototype.removeStudent = function (stdId) {
        this._studentsService.deleteStudent(stdId);
    };
    StudentsListComponent.prototype.refresh = function () {
        var _this = this;
        this.isRequesting = true;
        setTimeout(function () {
            _this._studentsService.getStudents().then(function (std) {
                _this.stdList = std;
                _this.stopRefreshing();
            }); //when you use prmoise
        }, 2000);
    };
    StudentsListComponent.prototype.stopRefreshing = function () {
        this.isRequesting = false;
    };
    return StudentsListComponent;
}());
StudentsListComponent = __decorate([
    core_1.Component({
        selector: 'studentslist',
        templateUrl: './app.students-list.component.html',
        styleUrls: ['app/app.component.styles.css'],
        providers: [students_service_1.StudentsService, students_curd_service_1.StudentCurdService]
    }),
    __metadata("design:paramtypes", [students_curd_service_1.StudentCurdService, router_1.Router])
], StudentsListComponent);
exports.StudentsListComponent = StudentsListComponent;
//# sourceMappingURL=app.students-list.component.js.map