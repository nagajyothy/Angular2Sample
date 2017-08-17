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
var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 300;
        //     if (!value) {
        //         this.cancelTimeout();
        //         this.isDelayedRunning = false;
        //         return;
        //     }
        //     if (this.currentTimeout) {
        //         return;
        //     }
        //    setTimeout(() => {
        //         this.isDelayedRunning = value;
        //         this.cancelTimeout();
        //     }, this.delay);
        // }
        // private cancelTimeout(): void {
        //     clearTimeout(this.currentTimeout);
        //     this.currentTimeout = undefined;
        // }
        // ngOnDestroy(): any {
        //     this.cancelTimeout();
        // }
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            this.isDelayedRunning = value;
        },
        enumerable: true,
        configurable: true
    });
    return SpinnerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SpinnerComponent.prototype, "delay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinnerComponent.prototype, "isRunning", null);
SpinnerComponent = __decorate([
    core_1.Component({
        selector: 'my-spinner',
        templateUrl: './spinnerEx.component.html',
        // template:`<div class="black_overlay">
        //     <div class="loading">
        //     </div>
        // </div>`,
        styleUrls: ['app/spinner/spinnerExample.css'],
    })
], SpinnerComponent);
exports.SpinnerComponent = SpinnerComponent;
//# sourceMappingURL=spinnerEx.component.js.map