import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleRecipePage } from "./pages/single-recipe/single-recipe.page";

const routes: Routes = [
  { path: '', component : SingleRecipePage},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SingleRecipeRoutingModule { }
