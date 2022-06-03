import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IngredientListPage} from "./pages/ingredient-list/ingredient-list.page";
import {IngredientsResolver} from "./resolvers/ingredients.resolver";
import {CategoryResolver} from "./resolvers/category.resolver";
import {AddIngredientPage} from "./pages/add-ingredient/add-ingredient.page";
import {ModifyIngredientPage} from "./pages/modify-ingredient/modify-ingredient.page";
import {IngredientsIdResolver} from "./resolvers/ingredients-id.resolver";

const routes: Routes = [
  {path: '',
    component: IngredientListPage,
    resolve: {
      ingredients: IngredientsResolver,
      categories: CategoryResolver
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {path: 'add',
    component: AddIngredientPage,
    resolve: {
      categories: CategoryResolver
    },
  },
  {path: ':id/modify',
    component: ModifyIngredientPage,
    resolve: {
      categories: CategoryResolver,
      ingredient: IngredientsIdResolver
    },
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
export class IngredientsRoutingModule {
}
