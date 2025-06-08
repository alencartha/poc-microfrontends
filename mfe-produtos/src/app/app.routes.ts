import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Produtos } from "./produtos/produtos";

export const routes: Routes = [
  { path: '', component:Produtos },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
