import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleRecipePage } from "./pages/single-recipe/single-recipe.page";
import {SingleRecipesResolver} from "./resolvers/single-recipes.resolver";

const routes: Routes = [
  { path: '',
    component : SingleRecipePage,
    resolve: {
      recipe: SingleRecipesResolver
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
export class SingleRecipeRoutingModule { }
