import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'ingredients',
    loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'recipes/:id',
    loadChildren: () => import('./single-recipe/single-recipe.module').then(m => m.SingleRecipeModule)
  },

  // {
  //   path: 'ingredients/:id',
  //   loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class appRoutingModule {}
