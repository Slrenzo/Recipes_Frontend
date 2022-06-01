import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  }
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
