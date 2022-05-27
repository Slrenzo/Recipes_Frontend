import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListPage } from "./pages/recipe-list/recipe-list.page";
import {RecipesResolver} from "./resolvers/recipes.resolver";
import {AddRecipeComponent} from "./components/add-recipe/add-recipe.component";
import {ModifyRecipeComponent} from "./components/modify-recipe/modify-recipe.component";

const routes: Routes = [
  { path: '',
    component : RecipeListPage,
    resolve: {
      recipes: RecipesResolver
    }
  },
  {path: 'add', component: AddRecipeComponent},
  {path: ':id/modify', component: ModifyRecipeComponent}
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
