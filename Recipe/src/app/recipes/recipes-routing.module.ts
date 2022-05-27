import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListPage } from "./pages/recipe-list/recipe-list.page";
import {RecipesResolver} from "./resolvers/recipes.resolver";

const routes: Routes = [
  { path: '',
    component : RecipeListPage,
    resolve: {
      recipes: RecipesResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule { }
