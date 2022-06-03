import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListPage } from "./pages/recipe-list/recipe-list.page";
import {RecipesResolver} from "./resolvers/recipes.resolver";
import {TypesResolver} from "./resolvers/types.resolver";
import {SingleRecipePage} from "./pages/single-recipe/single-recipe.page";
import {SingleRecipesResolver} from "./resolvers/single-recipes.resolver";
import {AddRecipePage} from "./pages/add-recipe/add-recipe.page";
import {ModifyRecipePage} from "./pages/modify-recipe/modify-recipe.page";
import {IngredientsResolver} from "../ingredients/resolvers/ingredients.resolver";
import {UnitsResolver} from "./resolvers/units.resolver";

const routes: Routes = [
  { path: '',
    component : RecipeListPage,
    resolve: {
      recipes: RecipesResolver,
      types: TypesResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {path: 'add',
    component: AddRecipePage,
    resolve: {
      types: TypesResolver,
      ingredients: IngredientsResolver,
      units: UnitsResolver
    }
  },
  {path: ':id',
    component: SingleRecipePage,
    resolve: {
      recipe: SingleRecipesResolver,
    }
  },
  {path: ':id/modify',
    component: ModifyRecipePage,
    resolve: {
      recipe: SingleRecipesResolver,
      units: UnitsResolver
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
