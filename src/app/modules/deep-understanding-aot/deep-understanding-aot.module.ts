import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { DeepUnderstandingComponent } from "./deep-understanding-aot.component";

const aotCompilerRoute: Routes = [
    { path: "", component: DeepUnderstandingComponent }
]

@NgModule({
    imports: [RouterModule.forChild(aotCompilerRoute), CommonModule],
    declarations: [DeepUnderstandingComponent]
})

export class DeepUnderstandingAoTModule {

}