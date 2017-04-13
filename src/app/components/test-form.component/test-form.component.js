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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service/user.service");
var filling_languages_service_1 = require("../../services/filling-languages.service/filling-languages.service");
var validators_1 = require("../../functions/validators");
var EMAIL_REGEXP = "[A-Za-z0-9._&-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}";
// Буквы, цифры, дефисы, подчёркивания, точки и @. Минимум 6 символов
var PASSWORD_REGEXP = "^[A-Za-z0-9.@_-]{6,}$";
var TestFormComponent = (function () {
    function TestFormComponent(userService, router, fls) {
        this.userService = userService;
        this.router = router;
        this.fls = fls;
        this.users = [];
        this.path = "confirmation";
        this.formErrors = {
            "name": "",
            "login": "",
            "email": "",
            "password": "",
            "repeatPassword": ""
        };
        this.userForm = new forms_1.FormGroup({
            name: new forms_1.FormControl("", forms_1.Validators.required),
            login: new forms_1.FormControl("", [forms_1.Validators.required]),
            email: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.pattern(EMAIL_REGEXP)]),
            password: new forms_1.FormControl("", [forms_1.Validators.required, forms_1.Validators.pattern(PASSWORD_REGEXP)]),
            repeatPassword: new forms_1.FormControl("", [forms_1.Validators.required])
        }, validators_1.repeatPasswordValidator);
    }
    TestFormComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.validationMessages = this.fls.getValidationMesssages();
        this.filling = this.fls.getRegistrationFilling();
    };
    TestFormComponent.prototype.ngDoCheck = function () {
        this.validationMessages = this.fls.getValidationMesssages();
        this.filling = this.fls.getRegistrationFilling();
    };
    TestFormComponent.prototype.onSubmit = function () {
        var form = this.userForm;
        this.setErrorMessage(form);
        if (this.isValidate() && this.loginValidate()) {
            this.addUser(form.value);
            this.userService.lastName = form.value.name;
            this.router.navigate([this.path]);
        }
    };
    TestFormComponent.prototype.addUser = function (userData) {
        if (userData === void 0) { userData = this.userForm.value; }
        if (this.isValidate()) {
            this.userService.addUser(userData);
        }
    };
    TestFormComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
        return this.users;
    };
    TestFormComponent.prototype.setErrorMessage = function (form) {
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            var control = form.get(field);
            if (!control.valid || !form.valid) {
                var message = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += message[key] + ". ";
                }
                for (var key in form.errors) {
                    if (message[key]) {
                        this.formErrors[field] = message[key] + " ";
                    }
                }
            }
        }
    };
    TestFormComponent.prototype.isValidate = function () {
        return (this.userForm.status === "VALID");
    };
    TestFormComponent.prototype.loginValidate = function (users) {
        if (users === void 0) { users = this.getUsers(); }
        var checkedLogin = this.userForm.value.login;
        var field = "login";
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            if (user.login === checkedLogin) {
                this.formErrors[field] = "This login already exists";
                return false;
            }
        }
        return true;
    };
    return TestFormComponent;
}());
TestFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "testForm",
        templateUrl: "test-form.component.html",
        styleUrls: ["test-form.component.css"]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, filling_languages_service_1.FillingLanguageService])
], TestFormComponent);
exports.TestFormComponent = TestFormComponent;
//# sourceMappingURL=test-form.component.js.map