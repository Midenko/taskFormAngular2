import {Component, OnInit, DoCheck} from "@angular/core";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import { Router } from "@angular/router";

import {User} from "../../services/user.service/user";
import {UserService} from "../../services/user.service/user.service";
import {FillingLanguageService} from "../../services/filling-languages.service/filling-languages.service";
import {repeatPasswordValidator} from "../../functions/validators";

const EMAIL_REGEXP: string = "[A-Za-z0-9._&-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}";
// Буквы, цифры, дефисы, подчёркивания, точки и @. Минимум 6 символов
const PASSWORD_REGEXP: string = "^[A-Za-z0-9.@_-]{6,}$";

@Component({
    moduleId: module.id,
    selector: "testForm",
    templateUrl: "test-form.component.html",
    styleUrls: ["test-form.component.css"]
})

export class TestFormComponent implements OnInit, DoCheck {
    userForm: FormGroup;
    users: User[] = [];
    path: string = "confirmation";
    validationMessages: object;
    filling: object;

    formErrors = {
        "name": "",
        "login": "",
        "email": "",
        "password": "",
        "repeatPassword": ""
    };

    constructor(private userService: UserService, private router: Router, private fls: FillingLanguageService) {
        this.userForm = new FormGroup({
            name: new FormControl("", Validators.required),
            login: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required, Validators.pattern(EMAIL_REGEXP)]),
            password: new FormControl("", [Validators.required, Validators.pattern(PASSWORD_REGEXP)]),
            repeatPassword: new FormControl("", [Validators.required])
        }, repeatPasswordValidator);
    }

    ngOnInit() {
        this.getUsers();
        this.validationMessages = this.fls.getValidationMesssages();
        this.filling = this.fls.getRegistrationFilling();
    }

    ngDoCheck() {
        this.validationMessages = this.fls.getValidationMesssages();
        this.filling = this.fls.getRegistrationFilling();
    }

    onSubmit(): void {
        let form: FormGroup = this.userForm;
        this.setErrorMessage(form);
        if (this.isValidate() && this.loginValidate()) {
            this.addUser(form.value);
            this.userService.lastName = form.value.name;
            this.router.navigate([this.path]);
        }
    }

    addUser(userData: any = this.userForm.value): void {
        if (this.isValidate()) {
            this.userService.addUser(userData);
        }
    }

    getUsers(): User[] {
        this.userService.getUsers().then(users => this.users = users);
        return this.users;
    }

    setErrorMessage(form: any) {
        for (let field in this.formErrors) {
            this.formErrors[field] = "";
            let control = form.get(field);

            if (!control.valid || !form.valid) {
                let message = this.validationMessages[field];

                for (let key in control.errors) {
                    this.formErrors[field] += message[key] + ". ";
                }

                for (let key in form.errors) {
                    if (message[key]) {
                        this.formErrors[field] = message[key] + " ";
                    }
                }
            }
        }
    }

    isValidate(): boolean {
        return (this.userForm.status === "VALID");
    }

    loginValidate(users: User[] = this.getUsers()): boolean {
        let checkedLogin = this.userForm.value.login;
        let field = "login";
        for (let user of users) {
            if (user.login === checkedLogin) {
                this.formErrors[field] = "This login already exists";
                return false;
            }
        }
        return true;
    }
}