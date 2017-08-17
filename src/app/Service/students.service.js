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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var mock_students_1 = require("./mock-students");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var StudentsService = (function () {
    function StudentsService(http) {
        this.http = http;
        this.heroesPromise = Promise.resolve(mock_students_1.studentList);
        console.log(http);
    }
    //   extractdata(res:Response)
    //   {
    //     return res.json();
    //   } 
    StudentsService.prototype.getStudents = function () {
        var _this = this;
        //return this.http.get('app/Service/students.json').map( res => res.json().students );
        return Rx_1.Observable.of(mock_students_1.studentList).map(function (std) { return _this.studentList = std; }).catch(this.handleError);
    };
    StudentsService.prototype.getStudent = function (id) {
        debugger;
        //this.studentList =this.http.get('app/Service/students.json').map( res => res.json().students );
        return mock_students_1.studentList.find(function (std) { return std.id == id; });
        //return this.heroesPromise
        // .then(heroes => heroes.find(h => h.id === +id));
    };
    StudentsService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    //Prime NG Examples ====================== Services=============================================
    StudentsService.prototype.filterUserByname = function (stdName) {
    };
    return StudentsService;
}());
StudentsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map