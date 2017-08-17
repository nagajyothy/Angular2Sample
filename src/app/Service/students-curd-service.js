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
var mock_students_1 = require("./mock-students");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var router_1 = require("@angular/router");
var StudentCurdService = (function () {
    function StudentCurdService(_router) {
        this._router = _router;
        this.counter = 0;
    }
    StudentCurdService.prototype.getStudents = function () {
        debugger;
        return Promise.resolve(mock_students_1.studentList); //To return list of students from json collection using promise.
    };
    StudentCurdService.prototype.addStudent = function (stdObj) {
        debugger;
        console.log(mock_students_1.studentList.findIndex(function (s) { return s.id == stdObj.id; }));
        if (mock_students_1.studentList.findIndex(function (s) { return s.id == stdObj.id; }) == -1) {
            debugger;
            this.getStudents().then(function (std) {
                var maxIndex = std.length - 1;
                var stdWithMaxIndex = std[maxIndex];
                stdObj.id = stdWithMaxIndex.id + 1;
                std.push(stdObj);
            });
        }
        else {
            this.getStudents().then(function (std) {
                var index = std.findIndex(function (s) { return s.id == stdObj.id; });
                std[index].name = stdObj.name;
                std[index].age = stdObj.age;
                std[index].email = stdObj.email;
            });
        }
        this._router.navigate(['/dashboard/students']);
    };
    StudentCurdService.prototype.getStudent = function (id) {
        debugger;
        return this.getStudents().then(function (std) { return std.find(function (stdcheck) { return stdcheck.id === id; }); });
    };
    StudentCurdService.prototype.deleteStudent = function (id) {
        this.getStudents().then(function (std) {
            var stdIndex = std.findIndex(function (stdObj) { return stdObj.id == id; }); //to get the index of student
            std.splice(stdIndex, 1);
        });
    };
    return StudentCurdService;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StudentCurdService.prototype, "counter", void 0);
StudentCurdService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], StudentCurdService);
exports.StudentCurdService = StudentCurdService;
//# sourceMappingURL=students-curd-service.js.map