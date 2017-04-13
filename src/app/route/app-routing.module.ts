import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestFormComponent } from "../components/test-form.component/test-form.component";
import { ConfirmationComponent } from "../components/confirmation.component/confirmation.component";

const ROUTES: Routes = [
    {path: "", redirectTo: "registration", pathMatch: "full"},
    {path: "registration", component: TestFormComponent},
    {path: "confirmation", component: ConfirmationComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}