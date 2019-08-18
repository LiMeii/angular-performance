import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const dashboardRoute: Routes = [
    { path: "", component: DashboardComponent }
]

@NgModule({
    imports: [RouterModule.forChild(dashboardRoute)],
    declarations: [DashboardComponent]
})

export class DashboardModule {

    unnecessaryFunction(){
        console.log("this function ever been called!")
    }
}