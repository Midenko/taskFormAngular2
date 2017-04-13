import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TestFormComponent } from "./components/test-form.component/test-form.component";
import { ConfirmationComponent } from  "./components/confirmation.component/confirmation.component";
import { RadioButtonComponent } from "./components/radio-button.component/radio-button.component";

import { AppRoutingModule } from "./route/app-routing.module";

import { UserService } from "./services/user.service/user.service";
import { FillingLanguageService } from "./services/filling-languages.service/filling-languages.service";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        TestFormComponent,
        ConfirmationComponent,
        RadioButtonComponent
    ],
    providers: [
        UserService,
        FillingLanguageService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}