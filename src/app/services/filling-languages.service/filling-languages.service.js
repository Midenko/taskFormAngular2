"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var filling_eng_1 = require("./filling-eng");
var filling_rus_1 = require("./filling-rus");
var FillingLanguageService = (function () {
    function FillingLanguageService() {
        this.filling = {
            "eng": {
                "validationMesssages": filling_eng_1.VALIDATION_MESSAGES_ENG,
                "registrationFilling": filling_eng_1.REGISTRATION_FILLING_ENG,
                "confirmationFilling": filling_eng_1.CONFIRMATION_FILLING_ENG
            },
            "rus": {
                "validationMesssages": filling_rus_1.VALIDATION_MESSAGES_RUS,
                "registrationFilling": filling_rus_1.REGISTRATION_FILLING_RUS,
                "confirmationFilling": filling_rus_1.CONFIRMATION_FILLING_RUS
            }
        };
        this.selectedLanguage = "rus";
    }
    FillingLanguageService.prototype.getValidationMesssages = function () {
        return this.filling[this.selectedLanguage].validationMesssages;
    };
    FillingLanguageService.prototype.getRegistrationFilling = function () {
        return this.filling[this.selectedLanguage].registrationFilling;
    };
    FillingLanguageService.prototype.getConfirmationFilling = function () {
        return this.filling[this.selectedLanguage].confirmationFilling;
    };
    return FillingLanguageService;
}());
FillingLanguageService = __decorate([
    core_1.Injectable()
], FillingLanguageService);
exports.FillingLanguageService = FillingLanguageService;
//# sourceMappingURL=filling-languages.service.js.map