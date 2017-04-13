import { Injectable } from "@angular/core";

import {VALIDATION_MESSAGES_ENG, REGISTRATION_FILLING_ENG, CONFIRMATION_FILLING_ENG} from "./filling-eng";
import {VALIDATION_MESSAGES_RUS, REGISTRATION_FILLING_RUS, CONFIRMATION_FILLING_RUS} from "./filling-rus";

@Injectable()
export class FillingLanguageService {
    filling: {} = {
        "eng" : {
            "validationMesssages": VALIDATION_MESSAGES_ENG,
            "registrationFilling": REGISTRATION_FILLING_ENG,
            "confirmationFilling": CONFIRMATION_FILLING_ENG
        },
        "rus": {
            "validationMesssages": VALIDATION_MESSAGES_RUS,
            "registrationFilling" : REGISTRATION_FILLING_RUS,
            "confirmationFilling": CONFIRMATION_FILLING_RUS
        }
    };

    selectedLanguage: string = "rus";

    getValidationMesssages(): any {
        return this.filling[this.selectedLanguage].validationMesssages;
    }

    getRegistrationFilling(): any {
        return this.filling[this.selectedLanguage].registrationFilling;
    }

    getConfirmationFilling(): any {
        return this.filling[this.selectedLanguage].confirmationFilling;
    }
}