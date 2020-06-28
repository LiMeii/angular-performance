import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WebworkerComponent } from "./webworker.component";

const routes: Routes = [{ path: "", component: WebworkerComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [WebworkerComponent]
})

export class WebworkerModule {

}