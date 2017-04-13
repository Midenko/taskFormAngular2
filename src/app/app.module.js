"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var test_form_component_1 = require("./components/test-form.component/test-form.component");
var confirmation_component_1 = require("./components/confirmation.component/confirmation.component");
var radio_button_component_1 = require("./components/radio-button.component/radio-button.component");
var app_routing_module_1 = require("./route/app-routing.module");
var user_service_1 = require("./services/user.service/user.service");
var filling_languages_service_1 = require("./services/filling-languages.service/filling-languages.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            test_form_component_1.TestFormComponent,
            confirmation_component_1.ConfirmationComponent,
            radio_button_component_1.RadioButtonComponent
        ],
        providers: [
            user_service_1.UserService,
            filling_languages_service_1.FillingLanguageService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map