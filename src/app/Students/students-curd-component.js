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
var router_1 = require("@angular/router");
var students_1 = require("../Service/students");
var students_curd_service_1 = require("../Service/students-curd-service");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var StudetnsCurdCompoenent = (function () {
    function StudetnsCurdCompoenent(_stdService, _route, location) {
        this._stdService = _stdService;
        this._route = _route;
        this.location = location;
        this.stdObj = new students_1.students();
        this.btntitle = "Update";
    }
    StudetnsCurdCompoenent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this._route.params
            .switchMap(function (params) { return _this._stdService.getStudent(+params['id']); })
            .subscribe(function (std) {
            if (std) {
                console.log("selected student:" + std);
                _this.stdObj = std;
                _this.btntitle = "Update";
            }
            else {
                _this.stdObj = new students_1.students();
                _this._stdService.getStudents().then(function (std) {
                    var maxIndex = std.length - 1;
                    var stdWithMaxIndex = std[maxIndex];
                    _this.stdObj.id = stdWithMaxIndex.id + 1;
                });
                _this.btntitle = "Add";
            }
        });
    };
    StudetnsCurdCompoenent.prototype.stdSubmit = function (std) {
        this._stdService.addStudent(this.stdObj);
    };
    StudetnsCurdCompoenent.prototype.goback = function () {
        this.location.back();
    };
    return StudetnsCurdCompoenent;
}());
StudetnsCurdCompoenent = __decorate([
    core_1.Component({
        selector: 'studentsCurd',
        template: "\n    \n    <div class=\"container\">\n        <form #frmStdCurd=\"ngForm\" (ngSubmit)=\"onSubmit(frmStdCurd)\" > \n        <div class=\"form-group\">\n            <label for=\"id\"> Id </label>\n            <label name=\"id\"  class=\"form-control\">{{stdObj.id}}</label>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\"> Name </label>\n            <input type=\"text\" name=\"name\" [(ngModel)]=\"stdObj.name\" class=\"form-control\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"age\"> Age </label>\n            <input type=\"number\" name=\"age\" [(ngModel)] =\"stdObj.age\" class=\"form-control\" required />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"mail\">Mail </label>\n            <input type=\"text\" name=\"mail\" [(ngModel)]=\"stdObj.email\" class=\"form-control\" required/>\n        </div>\n        <!-- prime button css-->\n         <button pButton type=\"button\" class=\"ui-button-success\" (click)=\"stdSubmit()\" icon=\"fa-check\" iconPos=\"left\" label=\"{{btntitle}}\"></button>\n        <!-- <button type=\"button\" class=\"btn btn-success\" (click)=\"stdSubmit()\"  [disabled]=\"!frmStdCurd.form.valid\">{{btntitle}}</button>-->\n         <button type=\"button\" class=\"btn btn-danger\" (click)=\"goback()\"><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>Cancel</button>\n      </form>\n    </div>\n    ",
        //templateUrl: './students-curd-component.html',
        styleUrls: ['app/app.component.styles.css'],
        providers: [students_curd_service_1.StudentCurdService]
    }),
    __metadata("design:paramtypes", [students_curd_service_1.StudentCurdService, router_1.ActivatedRoute, common_1.Location])
], StudetnsCurdCompoenent);
exports.StudetnsCurdCompoenent = StudetnsCurdCompoenent;
//# sourceMappingURL=students-curd-component.js.map