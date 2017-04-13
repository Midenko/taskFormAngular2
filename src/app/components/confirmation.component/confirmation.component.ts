import {Component, OnInit, DoCheck} from "@angular/core";

import {UserService} from "../../services/user.service/user.service";
import {FillingLanguageService} from "../../services/filling-languages.service/filling-languages.service";

@Component({
    moduleId: module.id,
    selector: "confirmation",
    templateUrl: "confirmation.component.html",
    styleUrls: ["confirmation.component.css"],
})

export class ConfirmationComponent implements OnInit, DoCheck {
    name: string;
    filling: object;

    constructor(private userService: UserService, private fls: FillingLanguageService) { }

    ngOnInit(): void {
        this.setName();
        this.filling = this.fls.getConfirmationFilling();
    }

    ngDoCheck() {
        this.filling = this.fls.getConfirmationFilling();
    }

    setName(): void {
        this.name = this.userService.lastName;
    }
}