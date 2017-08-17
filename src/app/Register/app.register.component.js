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
var students_curd_service_1 = require("../Service/students-curd-service");
var RegisterComponent = (function () {
    function RegisterComponent(_stdService) {
        this._stdService = _stdService;
        this.emailIsInvalid = false;
    }
    RegisterComponent.prototype.onSubmit = function (regForm) {
        debugger;
        this._stdService.addStudent(regForm.value);
    };
    RegisterComponent.prototype.emailValidator = function (email) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!EMAIL_REGEXP.test(email)) {
            return false;
        }
        return true;
    };
    RegisterComponent.prototype.onChangeIsprimarySkill = function (event) {
        console.log(event);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'employee',
        //template:'<h2>Registration Checking</h2>'
        templateUrl: './app.register.component.html',
        styleUrls: ['app/app.component.styles.css'],
        providers: [students_curd_service_1.StudentCurdService]
    }),
    __metadata("design:paramtypes", [students_curd_service_1.StudentCurdService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=app.register.component.js.map