import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const routes: Routes = [

  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
