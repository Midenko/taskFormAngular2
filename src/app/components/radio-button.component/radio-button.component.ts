import {Component} from "@angular/core";
import { FillingLanguageService} from "../../services/filling-languages.service/filling-languages.service";

@Component({
    moduleId: module.id,
    selector: "radioButton",
    templateUrl: "radio-button.component.html"
})

export class RadioButtonComponent {
    selectedLanguale: string = this.fls.selectedLanguage;

    constructor(private fls: FillingLanguageService) {}

    changeLanguage(lang: string) {
        this.selectedLanguale = lang;
        this.fls.selectedLanguage = lang;
    }
}

