import {FormGroup} from "@angular/forms";

export function repeatPasswordValidator(g: FormGroup): { [key: string]: any } {
    return g.get("password").value === g.get("repeatPassword").value
        ? null : {"repeatPasswordValidator": {}};
}
