"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function repeatPasswordValidator(g) {
    return g.get("password").value === g.get("repeatPassword").value
        ? null : { "repeatPasswordValidator": {} };
}
exports.repeatPasswordValidator = repeatPasswordValidator;
//# sourceMappingURL=validators.js.map