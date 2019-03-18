import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        loadChildren: "./core/core.module#CoreModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
