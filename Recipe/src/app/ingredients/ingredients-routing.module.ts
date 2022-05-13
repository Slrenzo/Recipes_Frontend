import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientListPage } from "./pages/ingredient-list/ingredient-list.page";

const routes: Routes = [
  { path: '', component : IngredientListPage},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IngredientsRoutingModule { }
