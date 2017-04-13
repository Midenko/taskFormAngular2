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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../services/user.service/user.service");
var filling_languages_service_1 = require("../../services/filling-languages.service/filling-languages.service");
var ConfirmationComponent = (function () {
    function ConfirmationComponent(userService, fls) {
        this.userService = userService;
        this.fls = fls;
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        this.setName();
        this.filling = this.fls.getConfirmationFilling();
    };
    ConfirmationComponent.prototype.ngDoCheck = function () {
        this.filling = this.fls.getConfirmationFilling();
    };
    ConfirmationComponent.prototype.setName = function () {
        this.name = this.userService.lastName;
    };
    return ConfirmationComponent;
}());
ConfirmationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "confirmation",
        templateUrl: "confirmation.component.html",
        styleUrls: ["confirmation.component.css"],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, filling_languages_service_1.FillingLanguageService])
], ConfirmationComponent);
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=confirmation.component.js.map