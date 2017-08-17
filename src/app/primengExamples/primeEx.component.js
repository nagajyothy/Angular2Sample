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
var primeng_1 = require("primeng/primeng");
var PrimeNgComponent = (function () {
    // constructor(private _stdService: StudentsService,private confirmationService: ConfirmationService) {
    function PrimeNgComponent(_stdService, confirmationService) {
        var _this = this;
        this._stdService = _stdService;
        this.confirmationService = confirmationService;
        this.notifyMsg = [];
        this.msgs = [];
        _stdService.getStudents().subscribe(function (std) { return _this.stdList = std; });
    }
    PrimeNgComponent.prototype.filterUserList = function (event) {
        var _this = this;
        debugger;
        var stdName = event.query; //Here It Gets The enterdtext in textbox.
        this._stdService.getStudents().subscribe(function (res) {
            _this.filterUser = _this.filterUserByName(stdName, res);
        });
    };
    PrimeNgComponent.prototype.filterUserByName = function (name, userList) {
        var _this = this;
        var stdListNew = [];
        this.stdList = [];
        userList.forEach(function (std) {
            if (std.name.toLowerCase().indexOf(name.toLowerCase()) == 0) {
                stdListNew.push(std);
                _this.stdList.push(std);
            }
        });
        return stdListNew;
    };
    PrimeNgComponent.prototype.selectedStd = function (std) {
        console.log(std);
        this.notifyMsg = [];
        this.notifyMsg.push({ severity: 'success', summary: std.name + ' was selected' });
        // this.msgs.push({severity:'success', summary:std.name+' was selected ', detail:std.name+' was selected '});
        this.stdList = [];
        this.stdList.push(std);
        this.confirm();
    };
    PrimeNgComponent.prototype.resetList = function () {
        var _this = this;
        debugger;
        this.stdList = [];
        this._stdService.getStudents().subscribe(function (std) { return _this.stdList = std; });
    };
    PrimeNgComponent.prototype.confirm = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: function () {
                debugger;
                _this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    };
    return PrimeNgComponent;
}());
PrimeNgComponent = __decorate([
    core_1.Component({
        selector: 'primeExample',
        templateUrl: './primeEx.component.html',
        styleUrls: ['app/app.component.styles.css'],
        //providers: [StudentsService]
        providers: [students_service_1.StudentsService, primeng_1.ConfirmationService]
    }),
    __metadata("design:paramtypes", [students_service_1.StudentsService, primeng_1.ConfirmationService])
], PrimeNgComponent);
exports.PrimeNgComponent = PrimeNgComponent;
//# sourceMappingURL=primeEx.component.js.map